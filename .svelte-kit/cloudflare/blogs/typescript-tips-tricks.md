# TypeScript Tips and Tricks for Better Code

TypeScript has become an essential tool for modern JavaScript development. Here are some advanced techniques that will make your code more maintainable and type-safe.

## Utility Types: Your Secret Weapon

TypeScript provides several built-in utility types that can save you time and make your code more expressive:

### Partial<T>

Make all properties optional:

```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
// All properties are now optional
```

### Pick<T, K>

Select specific properties:

```typescript
type UserSummary = Pick<User, "id" | "name">;
// Only id and name properties
```

### Omit<T, K>

Exclude specific properties:

```typescript
type UserWithoutId = Omit<User, "id">;
// All properties except id
```

## Discriminated Unions for Better Type Safety

Use discriminated unions to create type-safe state machines:

```typescript
type LoadingState = {
  status: "loading";
};

type SuccessState = {
  status: "success";
  data: any[];
};

type ErrorState = {
  status: "error";
  error: string;
};

type AsyncState = LoadingState | SuccessState | ErrorState;

function handleState(state: AsyncState) {
  switch (state.status) {
    case "loading":
      return "Loading...";
    case "success":
      return `Loaded ${state.data.length} items`;
    case "error":
      return `Error: ${state.error}`;
  }
}
```

## Generic Constraints

Use generic constraints to create more flexible and reusable code:

```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("hello"); // Works
logLength([1, 2, 3]); // Works
logLength(123); // Error: number doesn't have length
```

## Template Literal Types

Create more specific string types:

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;
type MouseEvent = EventName<"click">; // 'onClick'
type KeyboardEvent = EventName<"keydown">; // 'onKeydown'
```

## Conditional Types

Create types that depend on other types:

```typescript
type ApiResponse<T> = T extends string ? { message: T } : { data: T };

type StringResponse = ApiResponse<string>; // { message: string }
type DataResponse = ApiResponse<User[]>; // { data: User[] }
```

## Mapped Types

Transform existing types:

```typescript
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Required<T> = {
  [K in keyof T]-?: T[K];
};
```

## Branded Types for Extra Safety

Create distinct types that can't be mixed up:

```typescript
type UserId = string & { __brand: "UserId" };
type ProductId = string & { __brand: "ProductId" };

function createUserId(id: string): UserId {
  return id as UserId;
}

function getUser(id: UserId) {
  // Implementation
}

// This will cause a TypeScript error:
getUser(createUserId("123")); // Error: ProductId is not assignable to UserId
```

## Conclusion

These TypeScript features can significantly improve your code's type safety and maintainability. Start incorporating them gradually into your projects, and you'll find yourself writing more robust and self-documenting code.

Remember: TypeScript is a tool to help you catch errors at compile time, not a replacement for good testing and code review practices!
