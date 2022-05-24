# Terraform Config
terraform {
  required_version = "~> 0.14.10"

  backend "s3" {
    bucket = "my-dev-terraform-states"
    key    = "example"
    region = "us-east-2"
  }

  required_providers {
    aws = {
      version = ">= 3.7.0"
      source  = "hashicorp/aws"
    }
  }
}

# Locals
locals {
  app_name = "node-api-skeleton"
}

# Modules
module "my-development-infrastructure" {
  source = "../resources"

  app_name = local.app_name

  lambda_environment_variables = {
    "NODE_ENV"  = "development"
    "APP_NAME"  = local.app_name
    "APP_PORT"  = "8080"
    "LOG_LEVEL" = "info"
  }
}
