<template>
  <el-pagination
    class="kl-pagination"
    :current-page.sync="searchParams.currentPage"
    :page-size.sync="searchParams.pageSize"
    :page-sizes = "[5, 10, 15, 20, 25, 30, 50, 100, 200, 500]"
    layout="sizes, prev, pager, next, total"
    :total="total"
    @size-change="onPageSizeChange"
    @current-change="onCurrentPageChange"
  />
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    currentPage: {
      required: true,
      type: Number,
      default: 1
    },
    pageSize: {
      required: true,
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      searchParams: {
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
    }
  },
  watch: {
    currentPage (newValue) {
      this.searchParams.currentPage = newValue
    },
    pageSize (newValue) {
      this.searchParams.pageSize = newValue
    }
  },
  mounted () {
    this.$emit('update:currentPage', this.currentPage)
    this.$emit('update:pageSize', this.pageSize)
  },
  methods: {
    onPageSizeChange (val) {
      this.$emit('update:pageSize', val)
      this.$emit('size-change', val)
      this.onChange()
    },
    onCurrentPageChange (val) {
      this.$emit('update:currentPage', val)
      this.$emit('current-change', val)
      this.onChange()
    },
    onChange () {
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss" scoped>
.kl-pagination {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}
</style>
