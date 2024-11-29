import Axes from "./axes";

type Theme = {
    "id": number;
    "behaviours": string[],
    "axes": Axes,
    "colours" : string[],
    "title": string;
    "insight": string;
    "caution": string;
    "prompts": string[];
    "description": string[];
};

export default Theme;