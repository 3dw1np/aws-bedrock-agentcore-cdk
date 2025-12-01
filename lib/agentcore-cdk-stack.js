const path = require('path');
const cdk = require('aws-cdk-lib');
const { Construct } = require('constructs');
const { AgentRuntimeArtifact, Runtime } = require('@aws-cdk/aws-bedrock-agentcore-alpha');

class AwsBedrockAgentcoreCdkStack extends cdk.Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const role = new cdk.aws_iam.Role(this, "AgentRole", {
      assumedBy: new cdk.aws_iam.ServicePrincipal("bedrock-agentcore.amazonaws.com"),
    });

    role.addToPolicy(new cdk.aws_iam.PolicyStatement({
      actions: ["bedrock:InvokeModel", "bedrock:InvokeModelWithResponseStream"],
      resources: ["*"],
    }));

    role.addManagedPolicy(
      cdk.aws_iam.ManagedPolicy.fromAwsManagedPolicyName("CloudWatchFullAccess")
    );

    // const agentRuntimeArtifact = AgentRuntimeArtifact.fromAsset(
    //   path.join(__dirname, '..', 'agents', 'agent-python-strands')
    // );

    // const runtimeAgent = new Runtime(this, "MyAgentStrands", {
    //   runtimeName: "myStrandsAgent",
    //   executionRole: role,
    //   agentRuntimeArtifact: agentRuntimeArtifact,
    // });
  }
}

module.exports = { AwsBedrockAgentcoreCdkStack };