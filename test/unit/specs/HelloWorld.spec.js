// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
function add(num1,num2){
  return num1 + num2
}

describe('加法测试',()=>{
  it('数字相加',()=>{
    expect(add(1,2)).toBe(3)
  })
  it('数字相加',()=>{
    expect(add(2,4)).toBe(6)
  })
  it('数字相加',()=>{
    expect(add(5,5)).toBe(10)
  })
  it('数字相加',()=>{
    expect(add(5,6)).toBe(11)
  })
  it('数字相加',()=>{
    expect(add(5,7)).toBe(12)
  })
  
})