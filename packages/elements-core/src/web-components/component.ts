import { Article } from '../components/Docs/Article/index';
import { HttpOperation, HttpOperationProps } from '../components/Docs/HttpOperation/HttpOperation';
import { HttpService, HttpServiceProps } from '../components/Docs/HttpService/HttpService';
import { Model } from '../components/Docs/Model/Model';
import { createElementClass } from './createElementClass';

const HttpServiceNode: React.FC<HttpServiceProps> = HttpService;
const HttpOperationNode: React.FC<HttpOperationProps> = HttpOperation;
const exportProp: any = {};
const location: any = {};
const props: any = {};

export const HttpServiceElement = createElementClass(HttpServiceNode, {
  data: { type: 'object', defaultValue: {} },
  className: { type: 'string', defaultValue: '' },
  nodeTitle: { type: 'string', defaultValue: '' },
  layoutOptions: { type: 'object', defaultValue: {} },
  uri: { type: 'string', defaultValue: '' },
  allowRouting: { type: 'boolean', defaultValue: false },
  tryItCredentialsPolicy: { type: 'string', defaultValue: 'include' },
  tryItCorsProxy: { type: 'string', defaultValue: '' },
  exportProps: { type: 'object', defaultValue: exportProp },
  location: { type: 'object', defaultValue: location },
});

export const HttpOperationElement = createElementClass(HttpOperationNode, {
  data: { type: 'object', defaultValue: props },
  className: { type: 'string', defaultValue: '' },
  nodeTitle: { type: 'string', defaultValue: '' },
  layoutOptions: { type: 'object', defaultValue: {} },
  uri: { type: 'string', defaultValue: '' },
  allowRouting: { type: 'boolean', defaultValue: false },
  tryItCredentialsPolicy: { type: 'string', defaultValue: 'include' },
  tryItCorsProxy: { type: 'string', defaultValue: '' },
  exportProps: { type: 'object', defaultValue: exportProp },
  location: { type: 'object', defaultValue: location },
});

export const ModelElement = createElementClass(Model, {
  ...{
    data: { type: 'object', defaultValue: props },
    className: { type: 'string', defaultValue: '' },
    nodeTitle: { type: 'string', defaultValue: '' },
    layoutOptions: { type: 'object', defaultValue: {} },
    uri: { type: 'string', defaultValue: '' },
    allowRouting: { type: 'boolean', defaultValue: false },
    tryItCredentialsPolicy: { type: 'string', defaultValue: 'same-origin' },
    tryItCorsProxy: { type: 'string', defaultValue: '' },
    exportProps: { type: 'object', defaultValue: exportProp },
    location: { type: 'object', defaultValue: location },
    ...props,
  },
});

export const ArticleElement = createElementClass(Article, {
  ...{
    data: { type: 'object', defaultValue: props },
    className: { type: 'string', defaultValue: '' },
    nodeTitle: { type: 'string', defaultValue: '' },
    layoutOptions: { type: 'object', defaultValue: {} },
    uri: { type: 'string', defaultValue: '' },
    allowRouting: { type: 'boolean', defaultValue: false },
    tryItCredentialsPolicy: { type: 'string', defaultValue: 'same-origin' },
    tryItCorsProxy: { type: 'string', defaultValue: '' },
    exportProps: { type: 'object', defaultValue: exportProp },
    location: { type: 'object', defaultValue: location },
    ...props,
  },
});
