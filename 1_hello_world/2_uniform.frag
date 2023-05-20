// 병렬처리 Thread들이 서로에 대해 데이터를 공유할 수 없지만, 
// CPU로 부터 데이터를 받을 수는 있다
// 이 모든 input = uniform, 일정(uniform)하고 read only

// uniform 지원 타입: `float`, `vec2`, `vec3`, `vec3`, `vec4`, `mat2`, `mat3`, `mat4`,
//                  `sampler2D`, `samplerCube` 등

// float point precision 이후에 보통 정의됨

// GPU와 CPU 사이 다리 같은 역할

#ifdef GL_ES
precision mediump float;
#endif

// uniform vec2 u_resolutaion; // Canvas Size (widtth,height)
// uniform vec2 u_mouse; // mouse position in screen pixel
uniform float u_time; // Time in seconds since load

void main() {
    gl_FragColor = vec4(abs(sin(u_time * 1.0)), 0.0, 0.0, 1.0);
}
