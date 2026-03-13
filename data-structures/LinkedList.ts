class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;
  constructor(value: T) { this.value = value; }
}

export class LinkedList<T> {
  head: ListNode<T> | null = null;
  append(value: T) {
    const newNode = new ListNode(value);
    if (!this.head) { this.head = newNode; return; }
    let curr = this.head;
    while (curr.next) { curr = curr.next; }
    curr.next = newNode;
  }
}
