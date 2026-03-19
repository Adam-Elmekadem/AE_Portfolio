import { createSlice } from "@reduxjs/toolkit";

export const CINEMATIC_FRAMES = ["all", "blank"];

const initialState = {
  currentFrame: CINEMATIC_FRAMES[0],
  isPlaying: true,
  prefersReducedMotion: false,
};

const getNextFrame = (currentFrame) => {
  const currentIndex = CINEMATIC_FRAMES.indexOf(currentFrame);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;

  return CINEMATIC_FRAMES[(safeIndex + 1) % CINEMATIC_FRAMES.length];
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setCurrentFrame: (state, action) => {
      state.currentFrame = action.payload;
    },
    advanceFrame: (state) => {
      if (!state.isPlaying) {
        state.currentFrame = "all";
        return;
      }

      state.currentFrame = getNextFrame(state.currentFrame);
    },
    setPrefersReducedMotion: (state, action) => {
      state.prefersReducedMotion = action.payload;
      state.currentFrame = action.payload ? "all" : CINEMATIC_FRAMES[0];
    },
    setPlaybackState: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const {
  setCurrentFrame,
  advanceFrame,
  setPlaybackState,
  setPrefersReducedMotion,
} = uiSlice.actions;

export const selectCurrentFrame = (state) => state.ui.currentFrame;
export const selectIsPlaying = (state) => state.ui.isPlaying;
export const selectPrefersReducedMotion = (state) =>
  state.ui.prefersReducedMotion;

export default uiSlice.reducer;
