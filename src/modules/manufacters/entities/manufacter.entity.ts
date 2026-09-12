export class Manufacter {
  private id: number;
  private name: string;
  private description: string;
  private active: boolean;
  private createdAt: Date;
  private updatedAt: Date | null;

  constructor(id: number, name: string, description: string, active: boolean, createdAt: Date, updatedAt: Date | null) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
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

  setId(id: number): void {
    this.id = id;
  }

  setName(name: string): void {
    this.name = name;
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

  deactivate(): void {
    this.active = false;
    this.updatedAt = new Date();
  }
}
