import { UUID } from 'node:crypto';

export class Series {
  private id: UUID;
  private name: string;
  private description: string;
  private active: boolean;
  private createDate: Date;
  private updateDate: Date;

  constructor(id: UUID, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.active = true; //Is active by default
    this.createDate = new Date();
    this.updateDate = new Date();
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setName(name: string): void {
    this.name = name;
  }

  setActive(isActive: boolean): void {
    this.active = isActive;
  }

  isActive(): boolean {
    return this.active;
  }

  getCreateDate(): Date {
    return this.createDate;
  }

  getUpdateDate(): Date {
    return this.updateDate;
  }

  deactivate(): void {
    this.active = false;
    this.updateDate = new Date();
  }

  activate(): void {
    this.active = true;
    this.updateDate = new Date();
  }

  getActive(): boolean {
    return this.active;
  }

}
