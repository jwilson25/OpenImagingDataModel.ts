import { z } from 'zod';

export const referenceSchema = z.object({
  //"description": "Required - Provide a bibliographic citation,
  //including all the author names (no et Al)
  citation: z.string(),
  doi_url: z.string().url().optional(),
  pubmed_id: z.string().url().optional(),
  url: z.string().url().optional(),
});

export type ReferenceData = z.infer<typeof referenceSchema>;

export class Reference {
  private _data: ReferenceData;

  constructor(inData: ReferenceData) {
    this._data = { ...inData };
  }

  get citation() {
    return this._data.citation;
  }

  get doi_url() {
    return this._data.doi_url;
  }

  get pubmed_id() {
    return this._data.pubmed_id;
  }

  get url() {
    return this._data.url;
  }
}
