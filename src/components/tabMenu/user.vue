/*
 * 主页
 * @Author: xsnowholy 
 * @Date: 2019-03-23 15:01:48 
 * @Last Modified by: xsnowholy
 * @Last Modified time: 2019-03-23 19:19:50
 */
<template>
  <div>
    <user-header></user-header>
    <group gutter="10px">
      <cell title="职业发展评测" is-link>
        <img slot="icon" width="20" style="display:block;margin: 10px 10px;" src="../../assets/myorder.png">
      </cell>
    </group>
    <group gutter="10px">
      <cell title="我的钱包" is-link>
        <img slot="icon" width="20" style="display:block;margin: 10px 10px;" src="../../assets/my_wallet.png">
      </cell>
      <cell title="我的订单" is-link>
        <img slot="icon" width="20" style="display:block;margin: 10px 10px;" src="../../assets/myorder.png">
      </cell>
    </group>
    <group gutter="10px">
      <cell title="实名认证" is-link>
        <img slot="icon" width="20" style="display:block;margin: 10px 10px;" src="../../assets/certification.png">
      </cell>
      <cell title="机构认证" is-link>
        <img slot="icon" width="20" style="display:block;margin: 10px 10px;" src="../../assets/agency_approval.png">
      </cell>
      <cell title="问题反馈" is-link>
        <img slot="icon" width="20" style="display:block;margin: 10px 10px;" src="../../assets/i_want_to_ridicule.png">
      </cell>
      <cell title="设置" is-link>
        <img slot="icon" width="20" style="display:block;margin: 10px 10px;" src="../../assets/ic_setting.png">
      </cell>
    </group>
  </div>
</template>

<script>
import { Cell, CellBox, Group } from 'vux'
import UserHeader from '@/components/public/UserHeader'
export default {
  data () {
    return {
      msg: "wo"
    };
  },

  components: {
    Group,
    Cell,
    UserHeader
  },

  computed: {},

  mounted () {
    console.log('hehe')
  },

  methods: {}
}

</script>
<style lang='less' scoped>
</style>