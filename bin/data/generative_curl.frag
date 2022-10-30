
#version 120
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2    u_resolution;
uniform float   u_time;

#include "lygia/generative/curl.glsl"

void main(void) {
    vec4 color = vec4(vec3(0.0), 1.0);
    vec2 pixel = 1.0/u_resolution.xy;
    vec2 st = gl_FragCoord.xy * pixel;

    vec2 d2 = curl(vec2(st * 5. + u_time)) * 0.5 + 0.5;
    vec3 d3 = curl(vec3(st * 5., u_time)) * 0.5 + 0.5;
    
    color.rgb += mix(vec3(d2, 0.0), d3, step(0.5, st.x));

    gl_FragColor = color;
}
