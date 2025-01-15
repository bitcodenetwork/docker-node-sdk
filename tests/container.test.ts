import Docker from "../src";

test('get list container', () => {
  const docker = new Docker();

  const containers = docker.container();

  expect(containers).toBeTruthy();
});