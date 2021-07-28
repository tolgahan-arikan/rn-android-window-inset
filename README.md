# About the solution

Inset information is sent by the android module using RN Bridge, this data is then used to drive the animation on RN side.

This solution is not as performant as fully native solution because it still uses bridge. An alternative solution could be creating a native wrapper
view and doing the animation on this view directly without going through bridge. Because of time constraints I decided to skip this solution.

# How to run

You need yarn and Android Studio installed to be able to run the example project.
Make sure emulator device SDK level is >= 30.

1. `yarn install` in the root of project folder
2. `cd example` and `yarn install` in example folder
3. `yarn android` in example folder
