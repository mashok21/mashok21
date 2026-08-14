export default function EntryList({ items, itemKey, children }) {
  return (
    <ul className="entry-list">
      {items.map((item, i) => (
        <li className="entry" key={itemKey ? itemKey(item) : item.title ?? i}>
          {children(item)}
        </li>
      ))}
    </ul>
  )
}
