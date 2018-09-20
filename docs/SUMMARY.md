# reSolve documentation

- [Introduction](Introduction.md)

  - [Setting Up](Introduction.md#setting-up)
    - [Prerequisites](Introduction.md#prerequisites)
    - [Getting Started](Introduction.md#getting-started)
  - [Examples](Introduction.md#examples)
  - [Learning Resouces](Introduction.md#learning-resouces)

- [Basics](Basics/README.md)

  - [reSolve app structure](Basics/reSolve%20App%20Structure.md)
    - [Configuration](Core%20Conepts.md#configuration)
    - [Write and Read Sides](Core%20Conepts.md#write-and-read-sides)
    - [Folder Structure](Core%20Conepts.md#folder-structure)
    - [Storage Adapters](Core%20Conepts.md#storage-adapters)
  - [Write Side](Basics/Write%20Side.md)
    - [Configuring Commands and Events](Basics/Write%20Side.md#configuring-commands-and-events)
    - [Sending a Command](Basics/Write%20Side.md#sending-a-command)
    - [Command Handler](Basics/Write%20Side.md#command-handler)
    - [Aggregate Projection Function](Basics/Write%20Side.md#aggregate-projection-function)
    - [Event Store](Basics/Write%20Side.md#event-store)
  - [Read Side](Basics/Read%20Side.md)
    - [Read Models and View Models](Basics/Read%20Side.md#read-models-and-view-models)
    - [Configuring Read Models](Basics/Read%20Side.md#configuring-read-models)
    - [Initialize Read Model](Basics/Read%20Side.md#initialize-read-model)
    - [Updating Read Model via Projection Function](Basics/Read%20Side.md#updating-read-model-via-projection-function)
    - [Resolvers](Basics/Read%20Side.md#resolvers)
    - [Performing Queries Using HTTP API](Basics/Read%20Side.md#performing-queries-using-http-api)
    - [View Model Specifics](Basics/Read%20Side.md#view-model-specifics)
  - [Frontend](Basics/Frontend.md)
    - [React/Redux Support](Basics/Frontend.md#react-redux-support)
    - [Sending Commands as Redux Actions](Basics/Frontend.md#sending-commands-as-redux-actions)
    - [Reactive View Models, Event Subscription](Basics/Frontend.md#reactive-view-vodels-event-subscription)
    - [Optimistic Commands](Basics/Frontend.md#optimistic-commands)

- [Authentication and Authorization](Authentication%20and%20Authorization.md)

  - [Setting up Authentication](Authentication%20and%20Authorization.md#setting-up-authentication)
  - [Using 3rd Party Auth Services](Authentication%20and%20Authorization.md#using-3rd-party-auth-services)
  - [Making Your Own User Registry](Authentication%20and%20Authorization.md#making-your-own-user-registry)
  - [Using JWT Tokens for C and Q Authorization](Authentication%20and%20Authorization.md#using-jwt-tokens-for-c-and-q-authorization)

- [Preparing to Production](Preparing%20to%20Production.md)

  - [Configuration Options](Preparing%20to%20Production.md#configuration-options)
  - [Configuring Adapters](Preparing%20to%20Production.md#configuring-adapters)
  - [Configure App URLs](Preparing%20to%20Production.md#configure-app-urls)

- [Advanced Techniques](Advanced%20Techniques.md)

  - [Splitting Code Into Chunks](Advanced%20Techniques.md#splitting-code-into-chunks)
  - [Running Serverless](Advanced%20Techniques.md#running-serverless)
  - [Server-Side Rendering](Advanced%20Techniques.md#server-side-rendering)
  - [Process Managers (Sagas)](Advanced%20Techniques.md#process-managers-sagas)

- [FAQ](FAQ.md)
- [API Reference](API%20Reference.md)
- [Troubleshooting](Troubleshooting.md)