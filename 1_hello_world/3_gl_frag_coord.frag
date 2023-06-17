// GLSL이 지원하는 내장 output 값
// - `vec4 gl_FragColor`, etc
// GLSL이 지원하는 내장 input 값
// - `vec4 gl_FragCoord`, etc
//  - 각 쓰레드가 어느 부분을 작업하고 있는지 알 수 있음
//    - uniform 값과 다름, 각 쓰레드마다 값이 다른 `varying` type 이기 때문

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    gl_FragColor = vec4(st.x, st.y, 0.0, 1.0);
}
