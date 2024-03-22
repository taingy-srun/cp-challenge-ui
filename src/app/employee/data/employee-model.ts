export class Employee {
    #_employeeId!: number;
    #name!: string;
    #phoneNumber!: string;
    #supervisors!: string;

    get employeeId(): number {
        return this.#_employeeId;
    }

    set employeeId(employeeId: number) {
        this.#_employeeId = employeeId;
    }

    get name(): string {
        return this.#name;
    }

    set name(name: string) {
        this.#name = name;
    }

    get phoneNumber(): string {
        return this.#phoneNumber;
    }

    set phoneNumber(phoneNumber: string) {
        this.#phoneNumber = phoneNumber;
    }

    get supervisors(): string {
        return this.#supervisors;
    }

    set supervisors(supervisors: string) {
        this.#supervisors = supervisors;
    }
}