import { UUID } from "node:crypto";

export class ProductMeasurement {
  productId: UUID;
  measurementTypeId: UUID;
  height: number;
  width: number | null;
  depth: number;
  scale: string | null;
  weight: number | null;

  constructor(
    productId: UUID,
    measurementTypeId: UUID,
    height: number,
    width: number | null,
    depth: number,
    scale: string | null,
    weight: number | null,
  ) {
    this.productId = productId;
    this.measurementTypeId = measurementTypeId;
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.scale = scale;
    this.weight = weight;
  }

  getProductId(): UUID {
    return this.productId;
  }

  getMeasurementTypeId(): UUID {
    return this.measurementTypeId;
  }

  getHeight(): number {
    return this.height;
  }

  getWidth(): number | null {
    return this.width;
  }

  getDepth(): number {
    return this.depth;
  }

  getScale(): string | null {
    return this.scale;
  }

  getWeight(): number | null {
    return this.weight;
  }

  setProductId(productId: UUID): void {
    this.productId = productId;
  }

  setMeasurementTypeId(measurementTypeId: UUID): void {
    this.measurementTypeId = measurementTypeId;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  setWidth(width: number | null): void {
    this.width = width;
  }

  setDepth(depth: number): void {
    this.depth = depth;
  }

  setScale(scale: string | null): void {
    this.scale = scale;
  }

  setWeight(weight: number | null): void {
    this.weight = weight;
  }

}
