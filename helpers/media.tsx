/* This interface describes the data structure a component gets back for fields
 * of type "image" in the component schema. See
 * https://docs.frontastic.cloud/docs/frontastic-schemas#schema-field-types
 */
export interface ImageComponentValue {
  media: {
    mediaId: string;
    name: string;
    tags: [string];
    file: string;
    size: number;
    width: number;
    height: number;
    format: string;
    created: string;
    metaData: string;
  };
  title: {
    [locale: string]: string;
  };
}
