class TrieNode{
  constructor(){
    this.end = false
    this.nextArr = new Array[26]
  }
}
class Trie {
  constructor(){
    this.root = new TrieNode()
  }
  insert(word){
    let cur = this.root
    for (let i = 0;i < word.length;i++){
      let index = word.charCodeAt(i) - a.charCodeAt(0)
      if (cur.nextArr[index] == undefined){
        cur.nextArr[index] = new TrieNode()
      }
      cur = cur.nextArr[index]
    }
    cur.end = true
  }
  search (s) {
    let cur = this.root;
    for (let i = 0; i < s.length; i++) {
      let u = s.charCodeAt(i) - 'a'.charCodeAt(0);
      if (cur.tns[u] == null) return false;
      cur = cur.tns[u];
    }
    return cur.end;
  }

  startsWith (s) {
    let cur = this.root;
    for (let i = 0; i < s.length; i++) {
      let u = s.charCodeAt(i) - 'a'.charCodeAt(0);
      if (cur.tns[u] == null) return false;
      cur = cur.tns[u];
    }
    return true;
  }
}

let trie = new Trie();

// 插入字符串
trie.insert("apple");
console.log(trie.search("apple"));  // 输出：true
console.log(trie.search('ae'));
console.log(trie.search("app"));    // 输出：false

console.log(trie.startsWith("app")); // 输出：true

// 插入字符串
trie.insert("app");
console.log(trie.search("app"));    // 输出：true
debugger