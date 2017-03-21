# serverless-dynamoforms
A Serverless implementation of DynamoForms

This is an implementation of a dynamic forms application running on the serverless framework for AWS (Lambda / API Gateway).

## Core Technologies
* Serverless framework for automatic deployment
	* Deploys using Lambda functions
	* Creates Databases from Config file
	* Creates API Gateway endpoints
* Vandium Lambda wrapper for JWT and added security protection
* Amazon DynamoDB for it's database
* Joi for model validation
* JWT Tokens for stateless authentication

## Design Overview
* Create reusable Entities
* Create forms based on a collection of Entities
* User based authentication
* Group authentication
* Use smart sharding to keep the datatables optimized
* Optimized for DynamoDB Provisioned Throughput

## Uses - A few examples we aim to cover
* Paperless forms
* Testing (Quizes etc)
* User created content (Chats, comment logs, message boards)
* CMS



