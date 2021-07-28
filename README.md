# About the solution

Inset information is sent by the android module using RN Bridge, this data is then used to drive the animation on RN side.

This solution is not as performant as fully native solution because it still uses bridge. An alternative solution could be creating a native wrapper
view and doing the animation on this view directly without going through bridge, but because of time constraints I decided to skip this solution.
