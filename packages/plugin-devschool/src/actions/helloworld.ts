import type {
    ActionExample,
    IAgentRuntime,
    Memory,
    Action,
    HandlerCallback,
    State,
} from "@elizaos/core";

export const helloWorldAction: Action = {
    name: "Hello_WORLD",
    similes: [
        "Hello"],
    validate: async (_runtime: IAgentRuntime, _message: Memory) => {
        return true;
    },
    description:
        "Reply with hello world in ascii code",
    handler: async (
        _runtime: IAgentRuntime,
        _message: Memory,
        _state: State,
        _options: {[key: string]: unknown},
        _callback: HandlerCallback
    ): Promise<boolean> => {
        const helloWorld = `HHHHHH EEEEE LLLL OOOOO  WOOORRRRLLLLDDDD`;


        _callback({
            text: helloWorld
        });
        return true;
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "say hellow world" },
            },
            {
                user: "{{user2}}",
                content: { text: "", action: "HELLO_WORLD" },
            },
        ]
    ] as ActionExample[][],
} as Action;
