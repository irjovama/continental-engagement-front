import EmptyReactive from "./emptyReactive";
import RadioReactive from "./radioReactive";
import ScaleReactive from "./scaleReactive";
import YesNoReactive from "./yesNoReactive";
import MultipleReactive from "./multipleReactive";
import TextReactive from "./textReactive";
export default function Reactive({ data, index }) {
  const group = data.options.length > 0 && data.options[0]?.group;

  const catalog = {
    "escala-1-7": <ScaleReactive data={data} index={index} />,
    "si-no": <YesNoReactive data={data} index={index} />,
    vacia: <EmptyReactive data={data} index={index} />,
    "multiple-aspectos": <MultipleReactive data={data} index={index} />,
    false: <TextReactive data={data} index={index} />,
  };
  return catalog[group];
}
