# Star Wars Mercenary Workshop

This repo is for the Star Wars Mercenary Workshop, a project to demonstrate how to use resources to build Angular applications.

![app screenshot.png](readme/app%20screenshot.png)

## Getting Started

To view the completed project, you can clone the `main` branch of the repository on Github.

```bash
git clone https://github.com/xocomil/resource-workshop.git
```

This project was created using the [Nx CLI](https://nx.dev/angular/getting-started/intro) and [Angular](https://angular.dev). To run the project, you will need to have Node.js installed on your machine. You can download Node.js from the [official website](https://nodejs.org/).

> [!NOTE]
> After cloning the repository, navigate to the
project directory and install the dependencies  using NPM. We are using version 19.2 of Angular that is not part of the peer dependencies for our Nx CLI so we need to use `--legacy-peer-deps` to install the dependencies.

```bash
npm install --legacy-peer-deps
```

Once the dependencies are installed, you can run the project using the following command:

```bash
npx nx serve
```

# Workshop

## Step 1: Clone the workshop project

To get started with the workshop, you will need to clone the `step1` tag of the `workshop` branch of the repository on Github.

```bash
git clone https://github.com/xocomil/resource-workshop.git --branch workshop
```
> [!NOTE] 
> After cloning the repository, navigate to the project directory and install the dependencies  using NPM. We are using version 19.2 of Angular that is not part of the peer dependencies for our Nx CLI so we need to use `--legacy-peer-deps` to install the dependencies.

```bash
npm install --legacy-peer-deps
```

Once the dependencies are installed, you can run the project using the following command:

```bash
npx nx serve
```

You will note that the buttons and project are in a default state and don't do anything.

## Step 2: Add a `resource` to get people from the Star Wars API

In the `services` directory there is a file called `swapi.service.ts`. This file contains a function that fetches people from the Star Wars API. We will use this function to get people from the API.

The function uses the [HttpClient class from Angular](https://next.angular.dev/api/common/http/HttpClient#). Unfortunately, `HttpClient` doesn't provide a good loading experience or a great error handling solution. Typically, you have to write boilerplate for loading and error experiences.

To solve this problem, we will use the new [resource from Angular 19.2](https://next.angular.dev/api/core/resource). The resource allows us to wrap promises and observables in a way that makes loading and errors easy requiring no boilerplate.

To get started, we will create a new resource and return it from the `peopleResource()` function and from the `rxPeopleResource()` function.

To create a resource from a promise, we can use the `resource` from Angular 19.2. An example is as follows:

```typescript
return resource({
  request: () => ({ id: id() }),
  loader: ({ request }) => firstValueFrom(this.#getPerson(request.id)),
  defaultValue: emptyPerson(),
});
```
You will notice that there are a few options that we passed to the `resource`:
- `request` <strong>(required)<strong>: A required function that returns an object map with parameters passed to the loader function as `request`. If you use [signals](https://next.angular.dev/api/core/signal#) in your map, the resource can respond to changes and automatically reload.
- `loader` <strong>(required)<strong>: A required function that returns a promise. This is the function that will be called when the resource is loaded.
- `defaultValue` <strong>(optional)<strong>: An optional default value for the resource. This is useful when you don't want your resource to potentially return `undefined`.

To create a resource from an observable, we can use the `rxResource` from Angular 19.2. An example is as follows:

```typescript
return rxResource({
  request: () => ({ id: id() }),
  loader: ({ request }) => this.#getPerson(request.id),
  defaultValue: emptyPerson(),
});

```
You will notice that there are a few options that we passed to the `rxResource`:
- `request` <strong>(required)<strong>: A required function that returns an object map with parameters passed to the loader function as `request`. If you use [signals](https://next.angular.dev/api/core/signal#) in your map, the resource can respond to changes and automatically reload.
- `loader` <strong>(required)<strong>: A required function that returns an observable. This is the function that will be called when the resource is loaded.
- `defaultValue` <strong>(optional)<strong>: An optional default value for the resource. This is useful when you don't want your resource to potentially return `undefined`.

### Task:

1. Create the `resource` and `rxResource` in `swapi.service.ts` and return them from the `peopleResource()` and `rxPeopleResource()` functions.
2. Use either the `resource` or `rxResource` in the `merc-choice.component.ts` to display a person from the Star Wars API.
3. <i>Bonus:</i> Use the resource of your choice to display a loading experience.

> [!TIP]
> You can use the `isLoading` signal from the resource to display a loading experience.
> 
> You can also use the `value` signal from the resource to display the person from the Star Wars API.

## Step 3: Make the Hire and Skip buttons work

> [!NOTE]
> Let's review what we changed. First, we added a loading experience using the flow control statement `@if`:
> ```html 
> @if (personResource.isLoading()) {
>   <div>Loading...</div>
> } @else {
>   ...
> } 
> ```
> We also added resources to the class:
> ```typescript
> readonly #swapiService = inject(SwapiService);
>
> protected personId = signal('1');
> protected personResource = this.#swapiService.peopleResource(this.personId);
>
> protected currentMerc = computed(() => {
> const value = this.personResource.value();
>
>    return value ? value : emptyPerson();
> });
> ```

With a `resource`, we can load a new value by changing the signal that comes in. We can make the `Hire` and `Skip` buttons work by changing the `personId` signal.

### Task:
1. Add code to `nextMerc()` handler of `merc-choice.component.ts` to get a random mercenary from the Star Wars API when it is called.

> [!TIP]
> We  included a class to give random IDs for people from the Star Wars API. It is called `merc.service.ts` and includes a function called `getMercs()` that returns an iterator.
> 
> It is an `@Injectable()` service so you can use it like a normal Angular service.

## Step 4: Make it all work!

> [!NOTE]
> Let's review what we changed. We added the the `MercService` and iterator to our component.
> ```typescript
> readonly #mercService = inject(MercService);
> readonly #mercOrder = this.#mercService.getMercs();
> ```
> Then we added code to `nextMerc()` to use the service to update our resource:
> ```typescript
> protected nextMerc() {
>    const next = this.#mercOrder.next().value;
>
>    if (next) {
>      this.personId.set(next.toString());
>    }
> }
> ```