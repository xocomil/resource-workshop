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

## Workshop

### Step 1: Clone the workshop project

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

### Step 2: Add a `resource` to get people from the Star Wars API

