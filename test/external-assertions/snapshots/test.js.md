# Snapshot report for `test/external-assertions/test.js`

The actual snapshot is saved in `test.js.snap`.

Generated by [AVA](https://avajs.dev).

## node assertion

> Snapshot 1

    `␊
      ✘ [fail]: test Assertion failed␊
      ✘ [fail]: test async Assertion failed␊
      ─␊
    ␊
      test␊
    ␊
      Assertion failed: ␊
    ␊
      false == true␊
    ␊
      AssertionError [ERR_ASSERTION]: false == true␊
          at ---␊
          at ---␊
          at ---␊
          at ---␊
          at ---␊
          at ---␊
          at ---␊
          at ---␊
          at ---␊
    ␊
    ␊
    ␊
      test async␊
    ␊
      Assertion failed: ␊
    ␊
      false == true␊
    ␊
      AssertionError [ERR_ASSERTION]: false == true␊
          at ---␊
          at ---␊
    ␊
      ─␊
    ␊
      2 tests failed`

## expect error

> Snapshot 1

    `␊
      ✘ [fail]: test Assertion failed␊
      ✘ [fail]: test async Assertion failed␊
      ─␊
    ␊
      test␊
    ␊
      Assertion failed: ␊
    ␊
      expect(received).toBeTruthy()␊
    ␊
      Received: false␊
    ␊
      Error: expect(received).toBeTruthy()␊
    ␊
      Received: false␊
          at ---␊
          at ---␊
          at ---␊
          at ---␊
          at ---␊
          at ---␊
          at ---␊
          at ---␊
          at ---␊
    ␊
    ␊
    ␊
      test async␊
    ␊
      Assertion failed: ␊
    ␊
      expect(received).toBeTruthy()␊
    ␊
      Received: false␊
    ␊
      Error: expect(received).toBeTruthy()␊
    ␊
      Received: false␊
          at ---␊
          at ---␊
    ␊
      ─␊
    ␊
      2 tests failed`