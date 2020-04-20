
/**
 * 队列
 */
export class Queue {
  /**
   * 队列中的对象
   */
  public items=[];

   /**
    * 为队列尾部添加一个数据
    */
   public Enqueue(element) {
       this.items.push(element);
   }
   
   /**
    * 移除队列中第一个入队的数据
    */
   public DeQueue() {
       return this.items.shift();
   }
 
   /**
    * 是否为空
    */
   public IsEmpty() {
       return this.items.length===0;
   }
}
