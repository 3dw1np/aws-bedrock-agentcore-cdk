# Welcome to your CDK JavaScript project

This is a blank project for CDK development with JavaScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app. The build step is not required when using JavaScript.

## Getting Started

1. **Install AWS CDK globally**
   ```bash
   npm install -g aws-cdk
   ```

2. **Initialize CDK project**
   ```bash
   cdk init app --language javascript
   ```

3. **Configure AWS credentials**
   ```bash
   aws configure
   ```

4. **Bootstrap CDK (first time only)**
   ```bash
   cdk bootstrap
   ```

5. **Deploy the stack**
   ```bash
   cdk deploy
   ```

## Useful commands

* `npm run test`         perform the jest unit tests
* `npx cdk deploy`       deploy this stack to your default AWS account/region
* `npx cdk diff`         compare deployed stack with current state
* `npx cdk synth`        emits the synthesized CloudFormation template
