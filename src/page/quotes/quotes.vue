<template>
   <div class="container">
    <el-row class="content">
        <el-col :span="16" class="main box-shadow">
          <div class="coin-topMenu flex-between">
              <div class="coin-market">
                  <span>全部行情</span>
                  <span>自选行情</span>
              </div>
              <div class="coin-more">
                  <Search></Search>
                  <el-select v-model="optionsValue" placeholder="SNY" size="small" style="width: 80px" id="sort">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
              </div>
            </div>
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
                style="display: inline-block; float: right;"
                :total="1000">
              </el-pagination>

        </el-col>
        <el-col :span="8" class="sidebar">
            <BaseCard title="快讯" more="更多" isFirst>
              <TreeList :newsList="newsList" isParentCard></TreeList>
           </BaseCard>
            <BaseCard title="圈子" more="更多">
              <CircleList :listLength="2"></CircleList>
            </BaseCard>  
        </el-col>
    </el-row>
    </div>
</template>

<script>
  export default {
    name: 'quotes',
    data () {
      return {
        newsList: [],
        options: [{
          value: 'hot',
          label: 'CNY'
        }, {
          value: 'time',
          label: 'SNY'
        }],
        optionsValue: '',
        tableData: [{
          name: 'LMC 邻萌宝宝',
          price: '0.038',
          applies: '-15.15',
          turnover: '220.82',
          market: '7617.00',
          amount: '1736.00',
          status: 1
        }],
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
      },
      getNewsList(oParm = {}, bIsMore = false){
        let loadingInstance = this.$loading({ target: ".tree-list", text: "拼命加载中..." });
        let token = {"pageIndex": this.curPageIndex, "pageSize": 3,"filter": Object.assign({"byDate":"byDate"}, oParm)}
        this.$api.sentimentNewsList(token).then(({ Data: { rows } }) => {
          this.newsList = bIsMore ? this.newsList.concat(rows) :  rows
          this.$nextTick(() => { 
            loadingInstance.close();
            this.isLoading = false
          });
        })
      },
    },
    mounted() {
      this.getNewsList()
      let arr   = []
      let child = this.tableData[0]
      for (let index = 0; index < 15; index++) {
        arr.push(child)  
      }
      this.tableData = arr
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .main {
    > .coin-topMenu {
      > .coin-more {
        > div {
          display inline-block
        }
        :last-child {
          margin-left 25px
        }
      }
    }
    > .el-table {
      margin-top 20px
      margin-bottom 20px
    }
  }
</style>


