import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useGameQueryStore } from "../store";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

// const SearchInput = ({ onSearch }: Props) => {
//   const ref = useRef<HTMLInputElement>(null);

//   return (
//     <form onSubmit={(event) => {
//       event.preventDefault();
//       if (ref.current) onSearch(ref.current.value);
//     }}>
//       <InputGroup>
//         <InputLeftElement children={<BsSearch />} />
//         <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />
//       </InputGroup>
//     </form>
//   );
// };

// export default SearchInput;

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
        navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
        {/* onChange={() => {
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }} */}
      </InputGroup>
    </form>
  );
};

export default SearchInput;

