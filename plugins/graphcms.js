import { GraphQLClient } from 'graphql-request';

const graphcmsClient = new GraphQLClient(
  'https://api-eu-west-2.graphcms.com/v2/ckxxjp2e21dx601we96fm6aks/master'
);

export default (_, inject) => {
  inject('graphcms', graphcmsClient);
};