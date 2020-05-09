import { Machine, interpret } from "xstate";

interface CarStateSchema {
  states: {
    idle: {};
    ascend: {};
    descend: {};
  };
}

interface CarContext {
  currentFloor: number;
}

type CarEvent = { type: "IDLE" } | { type: "ASCEND" } | { type: "DESCEND" };

const carMachine = Machine<CarContext, CarStateSchema, CarEvent>({
  key: "car",
  initial: "idle",
  context: {
    currentFloor: 0,
  },
  states: {
    idle: {
      on: {
        ASCEND: "ascend",
        DESCEND: "descend",
      },
    },
    ascend: { on: { DESCEND: "descend" } },
    descend: { on: { ASCEND: "ascend", IDLE: "idle" } },
  },
});

const carService = interpret(carMachine)
  .onTransition((state) => console.log(state.value))
  .start();

export default carService;
