# Excercise 11.1

---

# Small team CI/CD when working with C++

When working with C++, there are a lot of different tools and services that are used in development and CI/CD. We have picked a certain ecosystem for our current project, that we are going to go through. On this example project, we are mainly using Microsoft's tools and ecosystem.

## Setup Tools

### Development tools

Our choice for IDE is Visual Studio, an IDE that is quite popular when developing in C++. Since we are using Visual Studio, we can take advantage of already integrated tools of the IDE.

For linting, we are going to use **Clang-tidy**, that provides a framework for catching and fixing programming errors, including style and interface errors and bugs that can be detected with static analysis.

For testing, we can use test-tools integrated in the IDE. Visual Studio contains a **Test Explorer** for unit tests, that includes C++ test frameworks such as **Microsoft Unit Testing Framework for C++**, **Google Test** and **CTest**.

In Visual Studio, we can use it's own build tools. These build tools can be customized with different options, to suit the need of our current project.

## CI Tools and Provider

The CI tool we use, is **Azure Pipelines**, provided by Microsoft.

Since we are a small team, we made a decision to use Microsoft's Azure infrastructure and CI tools. We are already using quite a bit of Microsoft's development ecosystem. Therefore we made a choice to stay within it, for easy integration. Also using a cloud based CI tool makes it easier for a small team to maintain.

It can be used together with GitHub, which is our choice for version control management.

Also, Microsoft's CI tools are possible to deploy on-premise, if the need ever arises, while still staying within Microsoft's ecosystem.