// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdBehavior {
  constructor(): void;
  clone(): gdBehavior;
  setName(name: string): void;
  getName(): string;
  getTypeName(): string;
  getProperties(): gdMapStringPropertyDescriptor;
  updateProperty(name: string, value: string): boolean;
  initializeContent(): void;
  serializeTo(element: gdSerializerElement): void;
  unserializeFrom(element: gdSerializerElement): void;
  isFolded(): boolean;
  setFolded(folded: boolean): void;
  isDefaultBehavior(): boolean;
  delete(): void;
  ptr: number;
};