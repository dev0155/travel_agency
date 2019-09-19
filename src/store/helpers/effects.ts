export const createActionType = (name: string) => ({
  REQUEST: `${name} REQUEST`,
  SUCCESS: `${name} SUCCESS`,
  FAILURE: `${name} FAILURE`,
});
