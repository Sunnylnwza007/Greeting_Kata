const greet = require('./greet');

test("Hello, Bob",()=>{
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test("null",()=>{
    expect(greet()).toBe("Hello, my friend.");
});

test("uppercase",()=>{
    expect(greet("JERRY")).toBe("HELLO JERRY!");
});

test("join",()=>{
    expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
});
test("big array",()=>{
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
});
test("uppercase in array",()=>{
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
})