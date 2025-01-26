---
title: "Getting started with free OSS code assistants"
description: "Quick guide on how to get started with free OSS code assistants"
date: "01/02/2025"
---

AI-powered tools for developers are more popular than ever, with many services, code editors, and extensions, etc... While these tools are usually helpfull and convinient, they often come with monthly fees and require sending your data to their servers.

In this post, we’ll look at free, open-source AI models that you can run directly on your own computer and protect your privacy since all your data stays on your machine.

## Setup

First we need to [install Ollama](https://ollama.com/download). A tool for running open source models locally.

Verfy that Ollama is running:

```sh
ollama help
```

Ollama offers a wide collection of models, each with multiple options depending on the number of parameters used during training. In general, models with more parameters provide greater accuracy and a better understanding of tasks. However, this increased precision comes at the cost of more storage and compute on your local machine.

I usually prefer sticking with the default configurations for most models. They tend to strike a good balance of accuracy and performance. Here are the models I'am running at the moment. Keep in mind you'll need ~15GB of disk space to store these models.

- **Llama** - simple model sutable for simple tasks:

```sh
ollama run llama3.1
```

- **Deepseek R1** - new reasoning model everyone's talking about, it's suitable for solving quite complex problems:

```sh
ollama run deepseek-r1
```

- **Qwen2.5** - model optimized for code completion:

```sh
ollama run qwen2.5-coder
```

Now that we have the models running locally, let's connect them to the code editor. My editor of choice is VSCode, so will use [Continue extension](https://marketplace.visualstudio.com/items?itemName=Continue.continue). It's like the GitHub Copilot that let's us connect to local Ollama models. It has features like chat, contexts, autocomplete, and [much more](https://docs.continue.dev/).

Once installed, you should see new icon on the VSCode's sidebar.

Let's open Continue's configuration file:

```sh
code ~/.continue/config.json
```

And add the following to setup models we installed. We will use Llama and Deepseek for our chat and Qwen for autocomple:

```json
{
  "models": [
    {
      "title": "llama3.1 8B",
      "provider": "ollama",
      "model": "llama3.1:latest"
    },
    {
      "title": "deepseek-r1 7B",
      "provider": "ollama",
      "model": "deepseek-r1:latest"
    }
  ],
  "tabAutocompleteModel": {
    "title": "qwen2.5-coder 7B",
    "provider": "ollama",
    "model": "qwen2.5-coder:latest"
  }
}
```

## Get to work!

That's it, open the Continue from your sidebar in VSCode and get to work!
