variable "app_name" {
  description = "The application name"
  type        = string
}

variable "lambda_environment_variables" {
  description = "The lambda environment variables"
  type        = map(any)
}