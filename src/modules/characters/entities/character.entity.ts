import { UUID } from "node:crypto";

export class Character {
  private id: UUID;
  private name: string;
  private seriesId: UUID;
  private description: string;
  private active: boolean;
  private createdAt: Date;
  private updatedAt: Date | null;

  constructor(
    id: UUID,
    name: string,
    seriesId: UUID,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.seriesId = seriesId;
    this.description = description;
    this.active = true; //Is true by default
    this.createdAt = new Date();
    this.updatedAt = null;
  }

  getId(): UUID {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getSeriesId(): UUID {
    return this.seriesId;
  }

  getDescription(): string {
    return this.description;
  }

  isActive(): boolean {
    return this.active;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date | null {
    return this.updatedAt;
  }

  setName(name: string): void {
    this.name = name;
  }

  setSeriesId(seriesId: UUID): void {
    this.seriesId = seriesId;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setActive(active: boolean): void {
    this.active = active;
  }

  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  setUpdatedAt(updatedAt: Date | null): void {
    this.updatedAt = updatedAt;
  }

}
