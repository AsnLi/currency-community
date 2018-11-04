<template>
   <div class="container">
    <el-row class="content">
        <el-col :span="16" class="main box-shadow">
          <el-table
            :data="tableData"
            style="width: 100%" 
            :header-cell-style="{background: '#f7f7f7'}"
            :default-sort = "{prop: 'price', order: 'descending'}">
             <el-table-column 
                prop="name"
                label="名称">
              </el-table-column>
              <el-table-column v-for="column in tableHeader" :key="column.name"
                :prop="column.prop"
                :label="column.label"
                sortable>
              </el-table-column>
              <el-table-column 
                prop="status"
                label="自选">
                <template slot-scope="scope">
                  <el-button type="primary" size="mini">加自选</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="15"
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
        </el-col>
        <el-col :span="8" class="sidebar">
            5555555555555
        </el-col>
    </el-row>
    </div>
</template>

<script>
  export default {
    name: 'quotes',
    data () {
      return {
        tableData: [{
          name: 'LMC 邻萌宝宝',
          price: '0.038',
          applies: '-15.15',
          turnover: '220.82',
          market: '7617.00',
          amount: '1736.00',
          status: 1
        }, {
          name: 'LMC 邻萌宝',
          price: '0.038',
          applies: '-15.15',
          turnover: '220.82',
          market: '7617.00',
          amount: '1736.00',
          status: 1
        },{
          name: 'LMC 邻萌宝',
          price: '0.038',
          applies: '-15.15',
          turnover: '220.82',
          market: '7617.00',
          amount: '1736.00',
          status: 1
        },],
        tableHeader: [{
          label: "价格",
          prop: "price",
        },{
          label: "涨跌幅",
          prop: "applies",
        },{
          label: "成交额",
          prop: "turnover",
        },{
          label: "流通市值",
          prop: "market",
        },{
          label: "流通量",
          prop: "amount",
        }],
        currentPage3: 1,
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


