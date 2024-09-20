import { testProps } from "./types";

export function test({ x, y, z }: testProps) {
    console.log("Hello!");
    console.log(`x: ${x}`);
}