var config = {};

// AWS
config.aws_region = process.env.AWS_REGION || 'eu-west-2';
config.aws_hosts = process.env.AWS_HOSTS || 'https://search-gardenlog-76upvm5anguwgwdxmzcg5rzsyi.eu-west-2.es.amazonaws.com';

// Elasticsearch
config.es_index = process.env.ES_INDEX || 'gardenlog-dev';

module.exports = config;