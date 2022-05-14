import { useDispatch } from "react-redux";
import { MintAppDispatch } from ".";

export const useMintDispatch = () => useDispatch<MintAppDispatch>();
