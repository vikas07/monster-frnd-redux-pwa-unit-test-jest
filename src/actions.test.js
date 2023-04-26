import * as actions from './actions'
import * as types from './constants'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

export const mockStore = configureMockStore([thunkMiddleware]);// Thunk middleware


describe('actions', () => {
  it('should create an action to search', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
})

describe("Fetch robots action PENDING", () => {
  it("should create a Pending action on request Robots", () => {
    const store = mockStore();// Fake store
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    expect(action[0]).toEqual({ type: "REQUEST_ROBOTS_PENDING" });
  });
});

// describe("Fetch robots action SUCCESS", () => {
//   it("should create a Success action on request Robots", () => {
//     const data = [{
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz'
//     }]
//     const store = mockStore();// Fake store
//     store.dispatch(actions.requestRobots())
//     const action = store.getActions();
//     expect(action[1]).toEqual({
//       type: "REQUEST_ROBOTS_SUCCESS", payload: data
//     });
//   });
// });