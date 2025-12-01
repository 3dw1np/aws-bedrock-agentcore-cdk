#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { AwsBedrockAgentcoreCdkStack } = require('../lib/agentcore-cdk-stack');

const app = new cdk.App();
new AwsBedrockAgentcoreCdkStack(app, 'AgentcoreCdkStack', {
  description: 'AgentCoreCDK',
  tags: {
    Project: 'AgentCore',
  },
});
