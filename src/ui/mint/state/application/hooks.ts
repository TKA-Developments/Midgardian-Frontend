import { useCallback } from "react";
import { useSelector } from "react-redux";
import { MintAppState } from "..";
import { useMintDispatch } from "../hooks";
import { ApplicationModal, setOpenModal } from "./actions";

export const useIsModalOpen = (modal: ApplicationModal): boolean => {
  const openModal = useSelector(
    (state: MintAppState) => state.application.openedModal
  );
  return openModal === modal;
};

export const useOpenModal = (modal: ApplicationModal): (() => void) => {
  const dispatch = useMintDispatch();
  return useCallback(() => dispatch(setOpenModal(modal)), [dispatch, modal]);
};

export const useToggleModal = (modal: ApplicationModal): (() => void) => {
  const isOpen = useIsModalOpen(modal);
  const dispatch = useMintDispatch();
  return useCallback(
    () => dispatch(setOpenModal(isOpen ? null : modal)),
    [dispatch, modal, isOpen]
  );
};

export const useToggleWalletModal = (): (() => void) => {
  return useToggleModal(ApplicationModal.Wallet);
};
