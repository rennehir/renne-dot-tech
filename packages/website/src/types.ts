export type SanityImageSource =
  | string // Image asset ID
  | SanityReference
  | SanityAsset
  | SanityImageObject
  | SanityImageWithAssetStub;

export interface SanityReference {
  _ref: string;
}

export interface SanityImageWithAssetStub {
  asset: {
    url: string;
  };
}

export interface SanityAsset {
  _id?: string;
  url?: string;
  path?: string;
  assetId?: string;
  extension?: string;
  [key: string]: any;
}

export interface SanityImageObject {
  asset: SanityReference | SanityAsset;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
}

export interface SanityImageCrop {
  _type?: string;
  left: number;
  bottom: number;
  right: number;
  top: number;
}

export interface SanityImageHotspot {
  _type?: string;
  width: number;
  height: number;
  x: number;
  y: number;
}
