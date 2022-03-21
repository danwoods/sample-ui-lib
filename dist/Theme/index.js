import { _ as _extends, D as useTheme, E as ThemeContext, P as PropTypes, y as useTheme$1, T as ThemeContext$1, C as __assign, z as createTheme } from '../createTheme-0930b11c.js';
import * as React from 'react';
import React__default from 'react';
import { jsx } from 'react/jsx-runtime';
import 'react-is';

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
const specialProperty = 'exact-prop: \u200b';
function exactProp(propTypes) {
  if (process.env.NODE_ENV === 'production') {
    return propTypes;
  }

  return _extends({}, propTypes, {
    [specialProperty]: props => {
      const unsupportedProps = Object.keys(props).filter(prop => !propTypes.hasOwnProperty(prop));

      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map(prop => `\`${prop}\``).join(', ')}. Please remove them.`);
      }

      return null;
    }
  });
}

const hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);

    if (process.env.NODE_ENV !== 'production') {
      if (!mergedTheme) {
        console.error(['MUI: You should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
      }
    }

    return mergedTheme;
  }

  return _extends({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider$2(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme();

  if (process.env.NODE_ENV !== 'production') {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(['MUI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }

  const theme = React.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/jsx(ThemeContext.Provider, {
    value: theme,
    children: children
  });
}

process.env.NODE_ENV !== "production" ? ThemeProvider$2.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node,

  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider$2.propTypes = exactProp(ThemeProvider$2.propTypes) : void 0;
}

function InnerThemeProvider(props) {
  const theme = useTheme$1();
  return /*#__PURE__*/jsx(ThemeContext$1.Provider, {
    value: typeof theme === 'object' ? theme : {},
    children: props.children
  });
}

process.env.NODE_ENV !== "production" ? InnerThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node
} : void 0;
/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 */

function ThemeProvider$1(props) {
  const {
    children,
    theme: localTheme
  } = props;
  return /*#__PURE__*/jsx(ThemeProvider$2, {
    theme: localTheme,
    children: /*#__PURE__*/jsx(InnerThemeProvider, {
      children: children
    })
  });
}

process.env.NODE_ENV !== "production" ? ThemeProvider$1.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node,

  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider$1.propTypes = exactProp(ThemeProvider$1.propTypes) : void 0;
}

var color = {
	light: {
		text: {
			primary: {
				description: "Reflects the text.primary variable from the theme object",
				type: "color",
				value: "#000000de",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:3954b6510df8a66fae1298393ec2109cd4f52516,",
						exportKey: "color"
					}
				}
			},
			secondary: {
				description: "Reflects the text.secondary variable from the theme object",
				type: "color",
				value: "#00000099",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:1ec8a42667d081f9bcec8c12725dd04543377001,",
						exportKey: "color"
					}
				}
			},
			disabled: {
				description: "Reflects the text.disabled variable from the theme object",
				type: "color",
				value: "#00000061",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:e39fda746821d30d18095eb8053fb908b910ee33,",
						exportKey: "color"
					}
				}
			},
			"primary shades": {
				"4p": {
					description: "Used for hover states. The token represents 4% of the Text/Primary opacity",
					type: "color",
					value: "#0000000a",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:1e6fc53b6e3aad42bb05524a2623cf63aa219be6,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "",
					type: "color",
					value: "#0000001f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:6c9e9764a6ab9e6771858cf61ef7077160a20cba,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "Used for focus states. The token represents 30% of the Text/Primary opacity",
					type: "color",
					value: "#0000004d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:d8496304ab52e7ec78079e2a86fe56248d0f1c9e,",
							exportKey: "color"
						}
					}
				}
			},
			"secondary shades": {
				"4p": {
					description: "Used for focus states. The token represents 4% of the Text/Secondary opacity",
					type: "color",
					value: "#0000000a",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:d59eb90633c4ee5a5ac96d6426bcad3dfe3dead0,",
							exportKey: "color"
						}
					}
				},
				"18p": {
					description: "Used for focus states. The token represents 30% of the Text/Secondary opacity",
					type: "color",
					value: "#0000002e",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:86be64c1b3147f3a5d2af4990ca25ee0849ffae8,",
							exportKey: "color"
						}
					}
				}
			}
		},
		primary: {
			main: {
				description: "Reflects the Primary/Main variable from the theme object",
				type: "color",
				value: "#1976d2ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:eac0aaa70a4e2d0f9efad095f6704f17d4a1b8e5,",
						exportKey: "color"
					}
				}
			},
			dark: {
				description: "Used for hover states. Reflects the primary.dark variable from the theme object",
				type: "color",
				value: "#1565c0ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:61175225283e4f7100ccf9d8a354ab167d3fd93f,",
						exportKey: "color"
					}
				}
			},
			light: {
				description: "Reflects the primary.light variable from the theme object",
				type: "color",
				value: "#42a5f5ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:d6fc682605b51865a64fb6cbb4a96f3094cd5a68,",
						exportKey: "color"
					}
				}
			},
			contrast: {
				description: "Reflects the primary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color",
				type: "color",
				value: "#ffffffff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:9a684c9707ff5186b5c0df4b4bce9db99adac4be,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"4p": {
					description: "Used for hover states. The token represents 4% of the Primary/Main token",
					type: "color",
					value: "#1976d20a",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:2af4a0b45488c966127b2b5e0beb0748748da942,",
							exportKey: "color"
						}
					}
				},
				"8p": {
					description: "Used for selected states. The token represents 8% of the Primary/Main token",
					type: "color",
					value: "#1976d214",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:99ec9e9b8700b26177f708e3ae577db8e54482c6,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "Used for focus visible states. The token represents 12% of the Primary/Main token",
					type: "color",
					value: "#1976d21f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:986e06fc62709ab13d8cca1d1849ae219ddd77a9,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "Used for focus visible states. The token represents 30% of the Primary/Main token",
					type: "color",
					value: "#1976d24d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:74db326a93767a6a5b1aebaa4168c1d7c8bdd696,",
							exportKey: "color"
						}
					}
				},
				"50p": {
					description: "Used for enabled state. The token represents 50% of the Primary/Main token",
					type: "color",
					value: "#1976d280",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:606fc9a2ee274146c9dfdea7e550a9db6590f9e0,",
							exportKey: "color"
						}
					}
				}
			}
		},
		secondary: {
			main: {
				description: "Reflects the secondary.main variable from the theme object",
				type: "color",
				value: "#9c27b0ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:a49a1c53ead5254f764dd5823016a4436054d79d,",
						exportKey: "color"
					}
				}
			},
			dark: {
				description: "Used for hover states. Reflects the secondary.dark variable from the theme object",
				type: "color",
				value: "#7b1fa2ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:80c91bb674604652959b92b3ea7f690c26cb19b4,",
						exportKey: "color"
					}
				}
			},
			light: {
				description: "Reflects the secondary.light variable from the theme object",
				type: "color",
				value: "#ba68c8ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:7631552c9d4278ea1fc9d178637df1a7194ca783,",
						exportKey: "color"
					}
				}
			},
			contrast: {
				description: "Reflects the secondary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color",
				type: "color",
				value: "#ffffffff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:6a91e78001143934003e4e82aabafb8ab4279527,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"4p": {
					description: "Used for hover states. The token represents 4% of the Secondary/Main token",
					type: "color",
					value: "#9c27b00a",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:7821918a689551cf7409c0762dbe7e5852e03ea4,",
							exportKey: "color"
						}
					}
				},
				"8p": {
					description: "Used for selected states. The token represents 8% of the Secondary/Main token",
					type: "color",
					value: "#9c27b014",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:1ec1c74b69ece5944690f0c7cff3fe4db545200e,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "Used for focus visible states. The token represents 12% of the Secondary/Main token",
					type: "color",
					value: "#9c27b01f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:70b29fc0bfc0b9061562f51c0c27738b67eaf844,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "Used for focus visible states. The token represents 30% of the Secondary/Main token",
					type: "color",
					value: "#9c27b04d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:c1f44163f4317fe543fe5152c9c2d171903abaa0,",
							exportKey: "color"
						}
					}
				},
				"50p": {
					description: "Used for enabled state. The token represents 50% of the Secondary/Main token",
					type: "color",
					value: "#9c27b080",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:b0a4621776d42e70cab48f4973896a1979d4ea08,",
							exportKey: "color"
						}
					}
				}
			}
		},
		action: {
			"active (54p)": {
				description: "Reflects the action.active variable from the theme object",
				type: "color",
				value: "#0000008a",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:d9c7dc389b0043bbd89d941de4edb7c02f33f3a8,",
						exportKey: "color"
					}
				}
			},
			"hover (4p)": {
				description: "Reflects the action.hover variable from the theme object",
				type: "color",
				value: "#0000000a",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:819ea21a93c94d037d580455a4916ed5072d993d,",
						exportKey: "color"
					}
				}
			},
			"selected (8p)": {
				description: "Reflects the action.selected variable from the theme object",
				type: "color",
				value: "#00000014",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:3907c5d3c31ea6cda2142ee097031d92bc1eb1cd,",
						exportKey: "color"
					}
				}
			},
			"disabled (26p)": {
				description: "Reflects the action.disabled variable from the theme object",
				type: "color",
				value: "#00000042",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:9c5f4b1d2ac608c6ef6bec534ff41191f014cf11,",
						exportKey: "color"
					}
				}
			},
			"disabled background (12p)": {
				description: "Reflects the action.disabledBackground variable from the theme object",
				type: "color",
				value: "#0000001f",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:d2b9d6b9ff8b2df869cbfc1b93d88c35513ac85c,",
						exportKey: "color"
					}
				}
			},
			"focus (12p)": {
				description: "Reflects the action.focus variable from the theme object",
				type: "color",
				value: "#0000001f",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:8b363515704dc55a36328089fef7e23bbee7802b,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"30p": {
					description: "Used for focus states. The token represents 30% of the Action/Active token",
					type: "color",
					value: "#0000004d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:e80785961f4e37f44c3b4f7a8c8ad0008c117751,",
							exportKey: "color"
						}
					}
				}
			}
		},
		error: {
			main: {
				description: "Reflects the error.main variable from the theme object",
				type: "color",
				value: "#d32f2fff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:fa1d204667395bec2e77fdae4bbeff5d57481744,",
						exportKey: "color"
					}
				}
			},
			dark: {
				description: "Used for hover states. Reflects the error.dark variable from the theme object",
				type: "color",
				value: "#c62828ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:6b166a2e8c9fbbd7d8e155ceb1f2af7cec6054de,",
						exportKey: "color"
					}
				}
			},
			light: {
				description: "Reflects the error.light variable from the theme object",
				type: "color",
				value: "#ef5350ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:52fd079930e3ff3299aa44b6d3983bafef9dadd0,",
						exportKey: "color"
					}
				}
			},
			contrast: {
				description: "Reflects the error.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color",
				type: "color",
				value: "#ffffffff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:c03c3bdc249cfa0e22df3cb3fbb9d60062331a81,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"4p": {
					description: "Used for hover states. The token represents 4% of the Error/Main token",
					type: "color",
					value: "#d32f2f0a",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:c1f29caff34d0c4c6d2c878a15b252a45c0e4e6c,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "Used for focus visible states. The token represents 12% of the Error/Main token",
					type: "color",
					value: "#d32f2f1f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:5cf841c8b2967a5d3a79770e65581387708af1ba,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "Used for focus visible states. The token represents 30% of the Error/Main token",
					type: "color",
					value: "#d32f2f4d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:f7729717aebf8e73b7a0e8faa69fca83dfe04016,",
							exportKey: "color"
						}
					}
				},
				"50p": {
					description: "Used for enabled state. The token represents 50% of the Error/Main token",
					type: "color",
					value: "#d32f2f80",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:2100ef29492a7f061078db7de8427a8d0db4e3d8,",
							exportKey: "color"
						}
					}
				},
				"160p": {
					"0": {
						type: "color",
						value: "#d32f2fff"
					},
					"1": {
						type: "color",
						value: "#00000099"
					},
					description: "Used for Alert content. The token represents 60% #000 on top of the Error/Main token",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:de541cb6a17dc40213586abf61b06ebb1646acd5,",
							exportKey: "color"
						}
					}
				},
				"190p": {
					"0": {
						type: "color",
						value: "#d32f2fff"
					},
					"1": {
						type: "color",
						value: "#ffffffe6"
					},
					description: "Used for Alert background. The token represents 90% #FFF on top of the Error/Main token",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:abda5732c8a3c6278c227275153b66667f7a89d1,",
							exportKey: "color"
						}
					}
				}
			}
		},
		warning: {
			main: {
				description: "Reflects the warning.main variable from the theme object",
				type: "color",
				value: "#ed6c02ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:b9da872b1a9accb5f4e2904516a6e43e0c0fc333,",
						exportKey: "color"
					}
				}
			},
			dark: {
				description: "Used for hover states. Reflects the warning.dark variable from the theme object",
				type: "color",
				value: "#e65100ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:3d2ba1771c31985af405ad345e210b759618875d,",
						exportKey: "color"
					}
				}
			},
			light: {
				description: "Reflects the warning.light variable from the theme object",
				type: "color",
				value: "#ff9800ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:6e0507eb3880c300dd2dd25cbb8326e8b755a9d7,",
						exportKey: "color"
					}
				}
			},
			contrast: {
				description: "Reflects the warning.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color",
				type: "color",
				value: "#ffffffff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:7756bbcb6f99a96bd39e17dce54f5f588c32e7e2,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"4p": {
					description: "Used for hover states. The token represents 4% of the Warning/Main token",
					type: "color",
					value: "#ed6c020a",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:d3cbea9fc442c736952ebde5cceaf73bb5e8d6c0,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "Used for focus visible states. The token represents 12% of the Warning/Main token",
					type: "color",
					value: "#ed6c021f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:518812df025da425945be7e9edd5a6cdeab46232,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "Used for focus visible states. The token represents 30% of the Warning/Main token",
					type: "color",
					value: "#ed6c024d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:a0f067b686b0c102057a9533c10e6805817e38c9,",
							exportKey: "color"
						}
					}
				},
				"50p": {
					description: "Used for enabled state. The token represents 50% of the Warning/Main token",
					type: "color",
					value: "#ed6c0280",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:6fe9228aa1b116660dd47f426ca4859fb1e1e28d,",
							exportKey: "color"
						}
					}
				},
				"160p": {
					"0": {
						type: "color",
						value: "#ed6c02ff"
					},
					"1": {
						type: "color",
						value: "#00000099"
					},
					description: "Used for Alert content. The token represents 60% #000 on top of the Warning/Main token",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:cfeace6903e88db568efe89e30ca95ae1c1155a0,",
							exportKey: "color"
						}
					}
				},
				"190p": {
					"0": {
						type: "color",
						value: "#ed6c02ff"
					},
					"1": {
						type: "color",
						value: "#ffffffe6"
					},
					description: "Used for Alert background. The token represents 90% #FFF on top of the Warning/Main token",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:ec949470f6cda3e7fc260a15d2e584eda2b83a30,",
							exportKey: "color"
						}
					}
				}
			}
		},
		info: {
			main: {
				description: "Reflects the info.main variable from the theme object",
				type: "color",
				value: "#0288d1ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:bcd36f6d1b06eded37fe7de30d20fc9d6345b545,",
						exportKey: "color"
					}
				}
			},
			dark: {
				description: "Used for hover states. Reflects the info.dark variable from the theme object",
				type: "color",
				value: "#01579bff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:0fc64745c09d55c29c51bb15ab222aa5167b0c74,",
						exportKey: "color"
					}
				}
			},
			light: {
				description: "Reflects the info.light variable from the theme object",
				type: "color",
				value: "#03a9f4ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:10e057c7dbd4d51011af159f56b2bbf244ce141c,",
						exportKey: "color"
					}
				}
			},
			contrast: {
				description: "Reflects the info.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color",
				type: "color",
				value: "#ffffffff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:dd9bf0155f6c158f4338a10232f4c67082a4fc5f,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"4p": {
					description: "Used for hover states. The token represents 4% of the Warning/Main token",
					type: "color",
					value: "#0288d10a",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:64b8c82043e119ab517a578e0f3d8b03e5d896eb,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "Used for focus visible states. The token represents 12% of the Info/Main token",
					type: "color",
					value: "#0288d11f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:5507b6e44e28b5f7bff7f8a80266b55a7d50504e,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "Used for focus visible states. The token represents 30% of the Warning/Main token",
					type: "color",
					value: "#0288d14d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:267e529d1282c857ff789bbee3c80c6e5f67c49f,",
							exportKey: "color"
						}
					}
				},
				"50p": {
					description: "Used for enabled state. The token represents 50% of the Warning/Main token",
					type: "color",
					value: "#0288d180",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:fd7afccacc3f61493c97a25f04710d0df3689cb1,",
							exportKey: "color"
						}
					}
				},
				"160p": {
					"0": {
						type: "color",
						value: "#0288d1ff"
					},
					"1": {
						type: "color",
						value: "#00000099"
					},
					description: "Used for Alert content. The token represents 60% #000 on top of the Info/Main token",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:c85bcfef1c773fe82f46bf9fde8c187703fe4583,",
							exportKey: "color"
						}
					}
				},
				"190p": {
					"0": {
						type: "color",
						value: "#0288d1ff"
					},
					"1": {
						type: "color",
						value: "#ffffffe6"
					},
					description: "Used for Alert background. The token represents 90% #FFF on top of the Info/Main token",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:e5a1df733cbb8357969d82a956116844e988a14d,",
							exportKey: "color"
						}
					}
				}
			}
		},
		success: {
			main: {
				description: "Reflects the success.main variable from the theme object",
				type: "color",
				value: "#2e7d32ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:27a5b6b7776811774f27635b0032bebdaf326606,",
						exportKey: "color"
					}
				}
			},
			dark: {
				description: "Used for hover states. Reflects the success.dark variable from the theme object",
				type: "color",
				value: "#1b5e20ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:863ee2caee4d9b8514870f6adffc2a2bf2685415,",
						exportKey: "color"
					}
				}
			},
			contrast: {
				description: "Reflects the success.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color",
				type: "color",
				value: "#ffffffff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:1fdf65264e9d3a85d09682ba8e8168d4e72021ff,",
						exportKey: "color"
					}
				}
			},
			light: {
				description: "Reflects the success.light variable from the theme object",
				type: "color",
				value: "#4caf50ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:ebc14a0a5af264f345843b415127f4d1fc171532,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"4p": {
					description: "Used for hover states. The token represents 4% of the Success/Main token",
					type: "color",
					value: "#2e7d320a",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:808d9eeafa88418ca701ad2100822a68dcf82872,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "Used for focus visible states. The token represents 12% of the Success/Main token",
					type: "color",
					value: "#2e7d321f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:930561d463feaca091e84c0e1007143cc253df36,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "Used for focus visible states. The token represents 30% of the Success/Main token",
					type: "color",
					value: "#2e7d324d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:552b95b9ec5c2669080cd7fa0cddcef331f4eef9,",
							exportKey: "color"
						}
					}
				},
				"50p": {
					description: "Used for enabled state. The token represents 50% of the Success/Main token",
					type: "color",
					value: "#2e7d3280",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:2a15602f97fd078580c26c28b62fed01f2295578,",
							exportKey: "color"
						}
					}
				},
				"160p": {
					"0": {
						type: "color",
						value: "#2e7d32ff"
					},
					"1": {
						type: "color",
						value: "#00000099"
					},
					description: "Used for Alert content. The token represents 60% #000 on top of the Info/Main token",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:bae6824412bd2c98963904e5ce7312df3f74f8f8,",
							exportKey: "color"
						}
					}
				},
				"190p": {
					"0": {
						type: "color",
						value: "#2e7d32ff"
					},
					"1": {
						type: "color",
						value: "#ffffffe6"
					},
					description: "Used for Alert background. The token represents 90% #FFF on top of the Info/Main token",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:29dcc3c09a06cc09629c232786917a934554aea2,",
							exportKey: "color"
						}
					}
				}
			}
		},
		background: {
			paper: {
				description: "Reflects the background.paper variable from the theme object",
				type: "color",
				value: "#ffffffff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:e6ac6f3cefaed8ed30d8be140b916fc0bf4feef0,",
						exportKey: "color"
					}
				}
			},
			"default": {
				description: "Reflects the background.default variable from the theme object",
				type: "color",
				value: "#fafafaff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:8b0c826a21700a79b39fee311913268cf2b3a3d2,",
						exportKey: "color"
					}
				}
			}
		},
		other: {
			divider: {
				description: "Reflects the divider variable from the theme object",
				type: "color",
				value: "#0000001f",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:1466b22d049e70a80bd1274f6e749b8649665ce4,",
						exportKey: "color"
					}
				}
			},
			"outlined border (23p)": {
				description: "Border style for outlined variant components in resting state (Text Field, Select, Chips, etc)",
				type: "color",
				value: "#0000003b",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:51b3bc851a58d7b7c4549ba7f1ab7d8bbfcbfb6c,",
						exportKey: "color"
					}
				}
			},
			"backdrop overlay": {
				description: "Backdrop overlay background-color",
				type: "color",
				value: "#00000080",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:bb07b204376d9b2b4945ef318184113f76108b24,",
						exportKey: "color"
					}
				}
			},
			"filled input background": {
				description: "Token for the background style for the Filled variant components (Text Field, Select, Multiline).",
				type: "color",
				value: "#0000000f",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:624345161658219944d98334c71f9b3232799157,",
						exportKey: "color"
					}
				}
			},
			"standard input line": {
				description: "Token for the underline style for the Standard variant components (Text Field, Select, Multiline).",
				type: "color",
				value: "#0000006b",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:74085b6589a4635c93d7cebd1ec71ccc27b2c72d,",
						exportKey: "color"
					}
				}
			},
			snackbar: {
				description: "Snackbar background color",
				type: "color",
				value: "#323232ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:04f9c62a7c08e64945aa915ec71ef75ea0dc103c,",
						exportKey: "color"
					}
				}
			},
			"rating active": {
				description: "Active state color for Rating component",
				type: "color",
				value: "#ffb400ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:12964801e06b284fc91f8eb14b89879412fe9453,",
						exportKey: "color"
					}
				}
			}
		}
	},
	dark: {
		text: {
			primary: {
				description: "",
				type: "color",
				value: "#ffffffff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:a8f49d0b73c2263eb2f2aa1cbe593c3c32d81671,",
						exportKey: "color"
					}
				}
			},
			secondary: {
				description: "",
				type: "color",
				value: "#ffffffb3",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:c9cf8f40d2f1854f56d9ce4349e4ff109510b363,",
						exportKey: "color"
					}
				}
			},
			disabled: {
				description: "",
				type: "color",
				value: "#ffffff80",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:26755f721e3c317ec2ed66d5bb6240729f37fe71,",
						exportKey: "color"
					}
				}
			},
			"primary shades": {
				"4p": {
					description: "",
					type: "color",
					value: "#0000000a",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:90ab61b892b8bcebc5c1292388f4a4bebadd5266,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "",
					type: "color",
					value: "#ffffff1f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:f3a15be6a51bf951877523cbb795f41de0a5d7c4,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "",
					type: "color",
					value: "#ffffff4d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:1270eb505a9a829b4d3d3e30d8ce9e8ea30e5cb8,",
							exportKey: "color"
						}
					}
				}
			},
			"secondary shades": {
				"4p": {
					description: "",
					type: "color",
					value: "#ffffff0a",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:40cb296d88b9b44ca92d14a17db8f12101d27ee1,",
							exportKey: "color"
						}
					}
				},
				"18p": {
					description: "",
					type: "color",
					value: "#ffffff2e",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:82f7aa27fe251c10cb034443236c199df9998e89,",
							exportKey: "color"
						}
					}
				}
			}
		},
		primary: {
			main: {
				description: "",
				type: "color",
				value: "#90caf9ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:e7fc4e307221ee3719404227de5b96cf493e7644,",
						exportKey: "color"
					}
				}
			},
			dark: {
				description: "",
				type: "color",
				value: "#42a5f5ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:656c4a0bb178395d9b2dd34a525d50fccc77e352,",
						exportKey: "color"
					}
				}
			},
			light: {
				description: "",
				type: "color",
				value: "#e3f2fdff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:cb079e8b7760233d2eff23d1dafa216c0ac15e26,",
						exportKey: "color"
					}
				}
			},
			contrast: {
				description: "",
				type: "color",
				value: "#000000de",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:6e8a863d9bb364cd757395254a63fd287b4b829b,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"8p": {
					description: "Used for hover states. The token represents 4% of the Primary/Main token",
					type: "color",
					value: "#90caf914",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:d1c460f06a8f8a8ba5dee87da253bb1b0bc5cc20,",
							exportKey: "color"
						}
					}
				},
				"16p": {
					description: "Used for selected states. The token represents 16% of the Primary/Main token",
					type: "color",
					value: "#90caf929",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:6f8a292c69d8de8c5031f6120d10fda38c81052d,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "",
					type: "color",
					value: "#90caf91f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:dcf253741f7d84f66d2602b561741c3e8ea75e2d,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "",
					type: "color",
					value: "#90caf94d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:042add978d7f67c4ebf292eece07f4b032a03b28,",
							exportKey: "color"
						}
					}
				},
				"50p": {
					description: "",
					type: "color",
					value: "#90caf980",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:eda366ed01957318320e961e9e09c0beed711ea2,",
							exportKey: "color"
						}
					}
				}
			}
		},
		secondary: {
			main: {
				description: "",
				type: "color",
				value: "#ce93d8ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:9cd4853630a755b0f08c006ee92e1fe2c1bf1863,",
						exportKey: "color"
					}
				}
			},
			dark: {
				description: "",
				type: "color",
				value: "#ab47bcff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:38172ff136520d40b2cba19b221a8adc07e9c873,",
						exportKey: "color"
					}
				}
			},
			light: {
				description: "",
				type: "color",
				value: "#f3e5f5ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:a916f5ff501004898581ca997db40e76ab6209c8,",
						exportKey: "color"
					}
				}
			},
			contrast: {
				description: "",
				type: "color",
				value: "#000000de",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:38b6511059265d0913e7f38a2a7fcb50046b3fe5,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"8p": {
					description: "Used for hover states. The token represents 4% of the Primary/Main token",
					type: "color",
					value: "#ce93d814",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:c8bd0dddf0b3431dc414c20866f34261b110c495,",
							exportKey: "color"
						}
					}
				},
				"16p": {
					description: "Used for selected states. The token represents 16% of the Secondary/Main token",
					type: "color",
					value: "#ce93d829",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:626b15e7c305084e8085b58c4e8b6b0d72a31a7e,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "",
					type: "color",
					value: "#ce93d81f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:b6eb0decb3bcba55385887ff7bf305eee9a4b632,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "",
					type: "color",
					value: "#ce93d84d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:2c7d0df534eb67be811bbf07a2b30dd96f93aa33,",
							exportKey: "color"
						}
					}
				},
				"50p": {
					description: "",
					type: "color",
					value: "#ce93d880",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:dc3ce399af02b8c9011816654fb3d031800c9244,",
							exportKey: "color"
						}
					}
				}
			}
		},
		action: {
			"active (56p)": {
				description: "",
				type: "color",
				value: "#ffffff8f",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:6e366f27403be78493be1579234a6a8f5ae2e985,",
						exportKey: "color"
					}
				}
			},
			"hover (8p)": {
				description: "",
				type: "color",
				value: "#ffffff14",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:c3a527bfca6accb7b09caac8fe94515e3f62c181,",
						exportKey: "color"
					}
				}
			},
			"selected (16p)": {
				description: "",
				type: "color",
				value: "#ffffff29",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:11853d29e121fe072e5f846ff6c24781577d07df,",
						exportKey: "color"
					}
				}
			},
			"disabled (30p)": {
				description: "",
				type: "color",
				value: "#ffffff4d",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:559f24cd191ef9b7f2883d7364887bca57c686b3,",
						exportKey: "color"
					}
				}
			},
			"disabled background (12p)": {
				description: "",
				type: "color",
				value: "#ffffff1f",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:c96273ae8d3dff45f242794ca1bedaf54b409ec2,",
						exportKey: "color"
					}
				}
			},
			"focus (12p)": {
				description: "",
				type: "color",
				value: "#ffffff1f",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:393b25ac13fa6d30bf47d11f2c1164162dfb8a63,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"30p": {
					description: "",
					type: "color",
					value: "#ffffff4d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:edd3b45b54c333930fd2d381e26142866b47b901,",
							exportKey: "color"
						}
					}
				}
			}
		},
		error: {
			main: {
				description: "",
				type: "color",
				value: "#f44336ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:bc2cba87a0516163d4813de29c7a5cf6f8edc837,",
						exportKey: "color"
					}
				}
			},
			dark: {
				description: "",
				type: "color",
				value: "#d32f2fff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:1599bcb073aedc2ffb0b064744456f5bf7883636,",
						exportKey: "color"
					}
				}
			},
			light: {
				description: "",
				type: "color",
				value: "#e57373ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:56d5a4fb19c098cb30c02159ac9cffbe8235b3e2,",
						exportKey: "color"
					}
				}
			},
			contrast: {
				description: "",
				type: "color",
				value: "#ffffffff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:5b4d6ccb338b22dd9ab35763700852aa7cf2214a,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"8p": {
					description: "",
					type: "color",
					value: "#f4433614",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:12ebf1f44c1f793cf77d2fdd3e00a2b863c003e9,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "",
					type: "color",
					value: "#f443361f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:6347891179fe55f76469e59ec15af65875225244,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "",
					type: "color",
					value: "#f443364d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:c64911e53bb68b56792e1660db75fc6b167fe446,",
							exportKey: "color"
						}
					}
				},
				"50p": {
					description: "",
					type: "color",
					value: "#f4433680",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:303febfc7e60976924a0ed8d438a9030fc09620a,",
							exportKey: "color"
						}
					}
				},
				"160p": {
					"0": {
						type: "color",
						value: "#f44336ff"
					},
					"1": {
						type: "color",
						value: "#ffffff99"
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:c9614af4c36555b27a068830de81145e7f770064,",
							exportKey: "color"
						}
					}
				},
				"190p": {
					"0": {
						type: "color",
						value: "#f44336ff"
					},
					"1": {
						type: "color",
						value: "#000000e6"
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:49a55e7d9ef9f0f8692887529d15a47b70a72008,",
							exportKey: "color"
						}
					}
				}
			}
		},
		warning: {
			main: {
				description: "",
				type: "color",
				value: "#ffa726ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:e0d085fc5e0d16b695b111ea94f2161fb2162cae,",
						exportKey: "color"
					}
				}
			},
			dark: {
				description: "",
				type: "color",
				value: "#f57c00ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:201c045227b8681a6981d5e079880918feee50ee,",
						exportKey: "color"
					}
				}
			},
			light: {
				description: "",
				type: "color",
				value: "#ffb74dff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:05f8defd33d9508f3721bf1cd8a8839edc19722f,",
						exportKey: "color"
					}
				}
			},
			contrast: {
				description: "",
				type: "color",
				value: "#000000de",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:5b921045c7428a277b0b58ef4e6853b2d4f24ac6,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"8p": {
					description: "",
					type: "color",
					value: "#ffa72614",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:675f8a47b73f27c7d5589d8662b5db12c624d7d7,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "",
					type: "color",
					value: "#ffa7261f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:8885f8dce33109c1b5ac56692ced4b9dc1cefa37,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "",
					type: "color",
					value: "#ffa7264d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:d5efa7ff04a806bc4a24b4e3a48d03ce7e2da320,",
							exportKey: "color"
						}
					}
				},
				"50p": {
					description: "",
					type: "color",
					value: "#ffa72680",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:297a3bdcd4538f5626127508d9ca5a0375bdbf46,",
							exportKey: "color"
						}
					}
				},
				"160p": {
					"0": {
						type: "color",
						value: "#ffa726ff"
					},
					"1": {
						type: "color",
						value: "#ffffff99"
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:047a12875b9d146ff45ee3b08b2f214ae3b722c9,",
							exportKey: "color"
						}
					}
				},
				"190p": {
					"0": {
						type: "color",
						value: "#ffa726ff"
					},
					"1": {
						type: "color",
						value: "#000000e6"
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:b09597ba208f1569cc11699df59d0dbd1c51737d,",
							exportKey: "color"
						}
					}
				}
			}
		},
		info: {
			main: {
				description: "",
				type: "color",
				value: "#29b6f6ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:0fa503dd732590a612e7d0af85a24c10eaa2a078,",
						exportKey: "color"
					}
				}
			},
			dark: {
				description: "",
				type: "color",
				value: "#0288d1ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:964f13a744e0813f23d7f39b0847fbc7dfaf7abc,",
						exportKey: "color"
					}
				}
			},
			light: {
				description: "",
				type: "color",
				value: "#4fc3f7ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:a9868ed9c4e9d79e282ed670bb39b3a08f2c6db7,",
						exportKey: "color"
					}
				}
			},
			contrast: {
				description: "",
				type: "color",
				value: "#000000de",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:ae551b3aa3d9bb0d5e5b2b0d808ce58e5aad9a91,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"8p": {
					description: "",
					type: "color",
					value: "#0288d114",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:4b2d4300a6aa4c986017d2a6808708ec56e2d9cc,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "",
					type: "color",
					value: "#0288d11f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:622182776047e7bc523f2fc8cc5b5a5e242c03e1,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "",
					type: "color",
					value: "#0288d14d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:32f848206cad53ed81e6f972a64fa1c20e3b030c,",
							exportKey: "color"
						}
					}
				},
				"50p": {
					description: "",
					type: "color",
					value: "#0288d180",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:a0eb02492001d311af9f3dad27dc1d899f21a01c,",
							exportKey: "color"
						}
					}
				},
				"160p": {
					"0": {
						type: "color",
						value: "#0288d1ff"
					},
					"1": {
						type: "color",
						value: "#ffffff99"
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:9d85b689b3fc73ea227cf86205239211e869558e,",
							exportKey: "color"
						}
					}
				},
				"190p": {
					"0": {
						type: "color",
						value: "#0288d1ff"
					},
					"1": {
						type: "color",
						value: "#000000e6"
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:69ea5fa8ab9dd1c8da90950366659c4b8260d2a5,",
							exportKey: "color"
						}
					}
				}
			}
		},
		success: {
			main: {
				description: "",
				type: "color",
				value: "#66bb6aff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:48799a367d5751e486470b705066b6b2343a7e4e,",
						exportKey: "color"
					}
				}
			},
			dark: {
				description: "",
				type: "color",
				value: "#388e3cff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:b8a11ae304b3cb84f90d951efbc8321d32be5ff3,",
						exportKey: "color"
					}
				}
			},
			light: {
				description: "",
				type: "color",
				value: "#81c784ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:3075665f428bf1d4140cb449fe7b35717e3e260a,",
						exportKey: "color"
					}
				}
			},
			contrast: {
				description: "",
				type: "color",
				value: "#000000de",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:dadd10573fb185b5f2e1dc8de9eacd66d615c559,",
						exportKey: "color"
					}
				}
			},
			shades: {
				"8p": {
					description: "",
					type: "color",
					value: "#66bb6a14",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:ea651299ce16b2ed2e2270933f6f8bf3add448c6,",
							exportKey: "color"
						}
					}
				},
				"12p": {
					description: "",
					type: "color",
					value: "#66bb6a1f",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:39e79ade6065c2bb177ee24368f46e063c1e3532,",
							exportKey: "color"
						}
					}
				},
				"30p": {
					description: "",
					type: "color",
					value: "#66bb6a4d",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:973e0139af4f3eb1296c582134670a6b673ec2cc,",
							exportKey: "color"
						}
					}
				},
				"50p": {
					description: "",
					type: "color",
					value: "#66bb6a80",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:5e323e02f05cc3db2613c445f460700cefe6247a,",
							exportKey: "color"
						}
					}
				},
				"160p": {
					"0": {
						type: "color",
						value: "#66bb6aff"
					},
					"1": {
						type: "color",
						value: "#ffffff99"
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:b714bc542e5f4685a62b018b92e306c20ecf603b,",
							exportKey: "color"
						}
					}
				},
				"190p": {
					"0": {
						type: "color",
						value: "#66bb6aff"
					},
					"1": {
						type: "color",
						value: "#000000e6"
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:a66cb250e93cf83143552bad64a035a2eb3fcdd3,",
							exportKey: "color"
						}
					}
				}
			}
		},
		background: {
			"default": {
				description: "Reflects the background.default variable from the theme object",
				type: "color",
				value: "#121212ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:a960d19daeeb15d3c1d0ec912c8759649904fb5c,",
						exportKey: "color"
					}
				}
			},
			paper: {
				"elevation 0": {
					description: "Reflects the background.paper variable from the theme object. In dark mode, raising the elevation also makes the surface lighter.",
					type: "color",
					value: "#121212ff",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:e1af5a1a59970413fdf0afbebe335cd954c5ac46,",
							exportKey: "color"
						}
					}
				},
				"elevation 1": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff0d"
								},
								{
									position: 1,
									color: "#ffffff0d"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:7e32dd5c0bcd21c8379c765bf8370fa3d4581124,",
							exportKey: "color"
						}
					}
				},
				"elevation 2": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff12"
								},
								{
									position: 1,
									color: "#ffffff12"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:6caa297598e683000531f9f498ee2058402e58ec,",
							exportKey: "color"
						}
					}
				},
				"elevation 3": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff14"
								},
								{
									position: 1,
									color: "#ffffff14"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:52446e70bb0fad71ffce88218e970fbf20688d91,",
							exportKey: "color"
						}
					}
				},
				"elevation 4": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff17"
								},
								{
									position: 1,
									color: "#ffffff17"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:5cea4855a8bfe9e4eddafd08c47a62bd2dc0db5c,",
							exportKey: "color"
						}
					}
				},
				"elevation 5": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff1a"
								},
								{
									position: 1,
									color: "#ffffff1a"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:2c1ff92bc4683672b6cfa16e3504842c735e8ec8,",
							exportKey: "color"
						}
					}
				},
				"elevation 6": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff1c"
								},
								{
									position: 1,
									color: "#ffffff1c"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:90be2556d269859acf3bc960f594ea4a9ddefd69,",
							exportKey: "color"
						}
					}
				},
				"elevation 7": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff1c"
								},
								{
									position: 1,
									color: "#ffffff1c"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:bf95e6ca85e30a9bdb76ac90632ca8d1d102b17f,",
							exportKey: "color"
						}
					}
				},
				"elevation 8": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff1f"
								},
								{
									position: 1,
									color: "#ffffff1f"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:17d70e59d674b99a9645e0d56add723de2653c1b,",
							exportKey: "color"
						}
					}
				},
				"elevation 9": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff1f"
								},
								{
									position: 1,
									color: "#ffffff1f"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:18c5474f50cc6305f7442a19b872cc367ce72e67,",
							exportKey: "color"
						}
					}
				},
				"elevation 10": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff21"
								},
								{
									position: 1,
									color: "#ffffff21"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:abef56fc62456f2dd83d1e1107783bf12725fe4f,",
							exportKey: "color"
						}
					}
				},
				"elevation 11": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff21"
								},
								{
									position: 1,
									color: "#ffffff21"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:895d3405a2d9abe855319b52cd0c4269e83db45e,",
							exportKey: "color"
						}
					}
				},
				"elevation 12": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff24"
								},
								{
									position: 1,
									color: "#ffffff24"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:c4ea80ea19a9ce6d7a96aa1562b33436c02ea2a3,",
							exportKey: "color"
						}
					}
				},
				"elevation 13": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff24"
								},
								{
									position: 1,
									color: "#ffffff24"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:4b36679115f5123061e0777e35160d7daaafd59f,",
							exportKey: "color"
						}
					}
				},
				"elevation 14": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff24"
								},
								{
									position: 1,
									color: "#ffffff24"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:7771d0736f3feb8e914c3a0b54e132a0e6a4d868,",
							exportKey: "color"
						}
					}
				},
				"elevation 15": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff24"
								},
								{
									position: 1,
									color: "#ffffff24"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:02a0ae758f21d7ff591ba23c9e2fb5596bee9f7f,",
							exportKey: "color"
						}
					}
				},
				"elevation 16": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff26"
								},
								{
									position: 1,
									color: "#ffffff26"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:ecbdf420f68cb4a598275250328d778be19686b7,",
							exportKey: "color"
						}
					}
				},
				"elevation 17": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff26"
								},
								{
									position: 1,
									color: "#ffffff26"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:c31f2ca1cde74310bfb587c68fe4139c3b92a614,",
							exportKey: "color"
						}
					}
				},
				"elevation 18": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff26"
								},
								{
									position: 1,
									color: "#ffffff26"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:8ff277709d6b37f83980b48496d37e770d698930,",
							exportKey: "color"
						}
					}
				},
				"elevation 19": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff26"
								},
								{
									position: 1,
									color: "#ffffff26"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:aa86b9e03e6acdf789363b07203b35b70147f056,",
							exportKey: "color"
						}
					}
				},
				"elevation 20": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff29"
								},
								{
									position: 1,
									color: "#ffffff29"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:7f7dd54003949499d832383b933b439c8cdcd323,",
							exportKey: "color"
						}
					}
				},
				"elevation 21": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff29"
								},
								{
									position: 1,
									color: "#ffffff29"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:f0730d86250ac4c25fb0833ecd3966d7394bd640,",
							exportKey: "color"
						}
					}
				},
				"elevation 22": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff29"
								},
								{
									position: 1,
									color: "#ffffff29"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:11cfc7a067851b5049c51428862199ebf90704a2,",
							exportKey: "color"
						}
					}
				},
				"elevation 23": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff29"
								},
								{
									position: 1,
									color: "#ffffff29"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:66675fc86f4ef2345512dcd75a30a0244da02946,",
							exportKey: "color"
						}
					}
				},
				"elevation 24": {
					"0": {
						type: "color",
						value: "#121212ff"
					},
					"1": {
						type: "custom-gradient",
						value: {
							gradientType: "linear",
							rotation: 180,
							stops: [
								{
									position: 0,
									color: "#ffffff29"
								},
								{
									position: 1,
									color: "#ffffff29"
								}
							]
						}
					},
					description: "",
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:85b2f984e8b342368343cf0dc2c71dd692c2bf61,",
							exportKey: "color"
						}
					}
				}
			}
		},
		other: {
			divider: {
				description: "Reflects the divider variable from the theme object",
				type: "color",
				value: "#ffffff1f",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:114b9fd05f9c255ef9eaf8ecd2e933f240e8bfad,",
						exportKey: "color"
					}
				}
			},
			"outlined border (23p)": {
				description: "Border style for outlined variant components in resting state (Text Field, Select, Chips, etc)",
				type: "color",
				value: "#ffffff3b",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:a97fcf3d333a736c8fa509aea8c5adc471868d6d,",
						exportKey: "color"
					}
				}
			},
			"filled input background": {
				description: "Token for the background style for the Filled variant components (Text Field, Select, Multiline).",
				type: "color",
				value: "#ffffff17",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:d2ce81553bec9158292983834f6590b850f4c371,",
						exportKey: "color"
					}
				}
			},
			"standard input line": {
				description: "Token for the underline style for the Standard variant components (Text Field, Select, Multiline).",
				type: "color",
				value: "#ffffff6b",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:1db8801732890b48f87ff1a28b993f78cfa1b9fc,",
						exportKey: "color"
					}
				}
			},
			snackbar: {
				description: "Snackbar background color",
				type: "color",
				value: "#323232ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:df1a3875b620bfc16b8507b9eeb92feb4ed51db8,",
						exportKey: "color"
					}
				}
			},
			"rating active": {
				description: "Active state color for Rating component",
				type: "color",
				value: "#ffb400ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:8663ba6204e3d32a8e4fac6156108470657b09aa,",
						exportKey: "color"
					}
				}
			}
		}
	},
	common: {
		black: {
			"100p": {
				description: "",
				type: "color",
				value: "#000000ff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:5aa8ef9e49b5003e17ce45f906a8fb687fc80ffc,",
						exportKey: "color"
					}
				}
			}
		},
		white: {
			"30p": {
				description: "",
				type: "color",
				value: "#ffffff4d",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:3d0d9a8d64e4ea164abfc753690a90917789eb0f,",
						exportKey: "color"
					}
				}
			},
			"100p": {
				description: "",
				type: "color",
				value: "#ffffffff",
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:bb5fefa2725ac6d852a922db8a968bbae53cedce,",
						exportKey: "color"
					}
				}
			}
		}
	},
	grey: {
		"50": {
			description: "",
			type: "color",
			value: "#fafafaff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:372592d374015b040d10b43f71e4bccd7997c0f5,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#f5f5f5ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:cac4a3a4b399b37c498eb7070f4b121fd4953c29,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#eeeeeeff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d0955d296cc1bc88f40fee79af4178d7736474b7,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#e0e0e0ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:dd855e21c45fca9c83572a4d738fabeca718d94c,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#bdbdbdff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d978863f0610ac23a285159240d4345d8aedc417,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#9e9e9eff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1fae3eec9c40cefbc69783300c978fc919376603,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#757575ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a339feb008a8e1b2120aecc1f45378b89d912ec6,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#616161ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:dfa525da1b164b16eb6effaa6c57818e865b1c0b,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#424242ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b205f3d60b26d85af2a8b29fa2d757a7b2713cf7,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#212121ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ae43b69a8e09c56964ac7bbcdb609231ca44dcad,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#d5d5d5ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e9afaec83bc0bd90edace94ef4f65fa180c83c75,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#aaaaaaff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:bdf0ab655fd8c8a7ce468664d9c9a91b56e2f135,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#616161ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:22853bf0ffe4b16af279b40134fd11c8da458944,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#303030ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6ba44905d0a29e0b14729f3af50c719d5b6707b1,",
					exportKey: "color"
				}
			}
		}
	},
	indigo: {
		"50": {
			description: "",
			type: "color",
			value: "#e8eaf6ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:72f42e5eed08761f46f36a2f011658a2e9e2966c,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#c5cae9ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f775d5b7f71da46539838e820896ca4badd49b16,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#9fa8daff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:96fa2c41ec8c660e58bf7e3a3f9da1a5dcabac59,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#7986cbff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:fcd4329699d639b748513d9b80d3dc9b092334d5,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#5c6bc0ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1584d907b2d2ae907855e383f56a83e80871a5b1,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#3f51b5ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:2983f33b55eab82b40bfedf604e3f73f23f62e49,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#3949abff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ec80e5364901f3f7049998ff34e9be8ddb619e0f,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#303f9fff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:eaa3157347c07a78b4cacdade1909521c700f0aa,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#283593ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e80c4737d1f38614967dfa48e2b7457fca3e9da0,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#1a237eff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:2e2e63535adc4f66f02c49c09c2df0c3b10ffd22,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#8c9effff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a08db0fd31e6d490b28d939509b6517b6aa7c5d3,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#536dfeff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:976c62c1ba02848ecada09901ff6ed47d7a6cb3c,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#3d5afeff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:be6e54d19bdb51aae2a906e5365d864c89682439,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#304ffeff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:10326d6e7d64a748eddba2c9aeed8250e28b5e39,",
					exportKey: "color"
				}
			}
		}
	},
	"deep purple": {
		"50": {
			description: "",
			type: "color",
			value: "#ede7f6ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:77bdaa09059a51596a29466eec9210705d654e66,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#d1c4e9ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e78f659a5a95dc6ea769be466b6124841c0de506,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#b39ddbff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:96bde583d048b6846bfabc1819f96fad716f5544,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#9575cdff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:3116ade095674eeb2c722964fab685bb9554a5ca,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#7e57c2ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:3e54270cf89cc581464e5afda36912783eb53552,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#673ab7ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:32b92969ea22d73699b95cf0f60d8e36c5b958bd,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#5e35b1ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:5ca861681a060c34415b7af403591f17b1e19de3,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#512da8ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:aa0cbad253a4e7a6176410e68c32f2c6a41f3e88,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#4527a0ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6406d028eb264897039986f7a796b6bf32b678cb,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#311b92ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:eef2c3f0acfdc46e78f7faa305ff78cc72424028,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#b388ffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b3c8e415cda8d37c6afaef2b81c2a3c8cca86db3,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#7c4dffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:015765da70548512b2f7a8ae9046293c59f59d8d,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#651fffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:62031ae2310889ea2089c6aead439229a9bdcbe4,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#6200eaff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:cbd25c89e2b2eb00e721cd5d70138083d75a8f66,",
					exportKey: "color"
				}
			}
		}
	},
	amber: {
		"50": {
			description: "",
			type: "color",
			value: "#fff8e1ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ae0ee3dc4f7b5f3aa047491b1862df646f840aa2,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#ffd54fff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:2a3825f2e497add5e21a584c321c8c901dc91d66,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#ffca28ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d1320fd7486970a3c03035d5a40fe37e5cde6d73,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#ffc107ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:c154e2417f3361acd71f28da160bd3730f760fc7,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#ffb300ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:70a3b3b289d197ce547f2769c1a60f880f12cd4b,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#ffa000ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8b29a41c10770cbf78ef2baaf944e560c55df474,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#ff8f00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6978827be17cfc45c1ed4c126c5e3414e9ddf806,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#ff6f00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:725707c63c133f5f781b21b99a8d18dcd0363c4f,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#ffe57fff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a333c7928f8ac73c4a32a1e400ee4d5049162750,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#ffd740ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:9356434ec7a06e3514c08cfbfd5ae9cd297ca91e,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#ffc400ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f45dfaddf42a12afdf7ef18b9097bf583a27c76d,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#ffab00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7c6733b89e3d43267b1554778f3c5abcf3d9b4a4,",
					exportKey: "color"
				}
			}
		}
	},
	orange: {
		"50": {
			description: "",
			type: "color",
			value: "#fff3e0ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:649fd064fda4f227704a779c8841194942a806f0,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#ffe0b2ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:33bf8c0e65eef2fbe02cea0873babd8dff0200d3,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#ffcc80ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b1fb4c298d24fb4250b068ec37c95645158e1eed,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#ffb74dff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f895989d02575597c29c31ea3feb68d333b44e07,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#ffa726ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d63a06851b8b39bf9c7dd11267920f0c30cc06f0,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#ff9800ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6e69141480a3e69004b298d4a4deed4b6749c457,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#fb8c00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f51fa836eb5a2418621597263ae2d98066186964,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#f57c00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a346bee8bc12254faa58c66f15dfa46b50ad6a2d,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#ef6c00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ebb574e946b8dd15bed7e145566eaaf677fe2f2c,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#e65100ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b3fe1d8db1cb6500404d43da1628b9c594f56364,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#ffd180ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:32227663ce612b0fbbf27e51e6634b69c496c850,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#ffab40ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:5e1c15b735ea4acac5a036164e9860060c9cb6b9,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#ff9100ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:25dade71fad261e8eff30982f2eba9fc654a95a4,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#ff6d00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ffddee0e0e7e08afe172aee3bab9cafc37e3c637,",
					exportKey: "color"
				}
			}
		}
	},
	pink: {
		"50": {
			description: "",
			type: "color",
			value: "#fce4ecff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1cefa9d43327bc0b382832562bd86915bf371975,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#f8bbd0ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:10ce6d00f845e4ca6fcab6d9c5f54a130b61f4ad,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#f48fb1ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:c5fd3de071a765357c394b13b57b516bdaf6c504,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#f06292ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:bd64e596ae160a054afc0433b569b7442945f689,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#ec407aff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1cf836bffc9f3f2bbc6084b533fa35d1825de7ad,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#e91e63ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f82425fd7a0aa3e3c8482c67fb4c8d6b5287a9d6,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#d81b60ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7bf8d700371da54bd01e0f9e0d6533b0cc7611af,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#c2185bff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:168dcd3c2ac76b2b6aec27c2327e4806b551b3a9,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#ad1457ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f3abbc80cb4355eb4a6d3b58a5b1c8bd860eb18c,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#880e4fff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:dc02a28f63f9ed01c0a35bc26115f52f9e5623df,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#f50057ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0d3ec275a14726b9c8eb1c434f4c9fc8512d9aac,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#ff4081ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:168b6e1a32a11c9bc341be3bf5629fb05e27286d,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#f50057ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:dd901f9ae354b54fce0d6b8d2328f3629353c300,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#c51162ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:eb7407e7cdffab96c543b1504b8259be2da03a85,",
					exportKey: "color"
				}
			}
		}
	},
	"deep orange": {
		"50": {
			description: "",
			type: "color",
			value: "#fbe9e7ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6152bec4b875a0562ebce643e62741c53f8cb964,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#ffccbcff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:be10cd372ebbe6212cf8dec19237d00c101f9ee9,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#ffab91ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:48b33c0b9686f31b63368ea67941fe81977cd597,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#ff8a65ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:973bb6ea17c50e3698e6667fbb4db32ad332df6e,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#ff7043ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:14d1f5f11e6bc0102cc43671f07d767df7588712,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#ff5722ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1950ac01cdfff0d8b9387602754067833e34d05f,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#f4511eff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:70702b6b791ef456d05c7593537eec0856b9e134,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#e64a19ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f98cea0a7169b670cdc7d72ea46ef77b48d31ce9,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#d84315ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a0e61e41ae1fe23faaa340c7ef4e302d57dbcca8,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#bf360cff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:81f84c8121ca743f13f606f1e39cd7a4109dd644,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#ff9e80ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6802eb923b2ac6b854bd97bbf7f10bd36be566b1,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#ff6e40ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:279f1704493d29f312f36e74dcdf10564b959ae8,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#ff3d00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:104925715e7f72f06767e83d110c12eeb2cd8cbc,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#dd2c00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6578220c1b76ad6882e4409d09e739d567a71c29,",
					exportKey: "color"
				}
			}
		}
	},
	green: {
		"50": {
			description: "",
			type: "color",
			value: "#e8f5e9ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d9021dc44017b91bb809b39507b8673094b940ea,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#c8e6c9ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0c00e8b9e099abf52d44a0b3ce16f1323f6e14ed,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#a5d6a7ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d241229083e9aeeb2e72f8d9de993d7a28a7eb01,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#81c784ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:2281949fec94296c597dd4b2779bff604950c189,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#66bb6aff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e04c40b7f31410a9a8bf224b437727acec46188c,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#4caf50ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7f5323e543a7a1b9a4a74c222c3aac123f03e8b2,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#43a047ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:c12732b0892906ecff5b2b45ba515e444960080c,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#388e3cff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a7c0112d30893b448bb255df85d3e9cec1854427,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#2e7d32ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:5e6df939126feafbe398eb37f13afba0aa765997,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#1b5e20ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:693250b8d1208a54af617c1f252dcef56d1d8359,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#b9f6caff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:68532e0e5c012d7e372da95f0f70d3087d1984e7,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#69f0aeff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6015c948543ea60080d504bece70057441126b7a,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#00e676ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:c8879791c108c8ffb0f0f969998c8e4b6f8df74d,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#00c853ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:119f51966c8583eb070ed7987a8f928af4fa4c40,",
					exportKey: "color"
				}
			}
		}
	},
	red: {
		"50": {
			description: "",
			type: "color",
			value: "#feebeeff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:597a0568c7e0c1b19a3f2d8f1278bbb15b4427b5,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#fecdd2ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d52363380825ccd9047e3825303e372312d4baaf,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#ef9a9aff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:62d219dc2fbc777ed58f6cb39b0c84f28d224421,",
					exportKey: "color"
				}
			}
		},
		"300": {
			"0": {
				type: "color",
				value: "#be134dff"
			},
			"1": {
				type: "color",
				value: "#ffffff4d"
			},
			description: "",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:5dcb99019787c1204b54ce26b8a3537fded4ebde,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#ef5350ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0f6d5ce56cc17010f4f6c17e62420cefb578188a,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#f44336ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7ca00397b6c642e17c9fe80a09064204299ea074,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#e53935ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0e6347211238b8e0c85e1cfe49ab12a503bc1c92,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#b23842ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:efbf60703e4cb1ad07d570e50f026cea700d0ed3,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#c62828ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:3a033aced5104ae2f0ab10cf949a40934afb7d71,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#b71c1cff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0c7a785f8f9f1c4776f646d0b3b0c89bc3a32312,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#ff8a80ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:3cd82b013a05396934b63c3e2ab90cea2de4cdb2,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#ff5252ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:199259b10e645bc619f0dec294a7bf74607f779b,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#ff1744ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:9c7a30722d87fcf66dc6ee125796a5a201358a88,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#d50000ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:01bbd3b67e452c4121a650e1208ff325528e580e,",
					exportKey: "color"
				}
			}
		}
	},
	"light green": {
		"50": {
			description: "",
			type: "color",
			value: "#f1f8e9ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:3191275e6557c5f1197ff033b352bc481e9f6d32,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#dcedc8ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:15df79059ad91dfba150a2045af2795bbf513985,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#c5e1a5ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:c48f265776fe12c77617c462132b955001ddb7d2,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#aed581ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:631f16e9df23b76ef3695195a3badf60bbca9707,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#8bc34aff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:5e9b679f9e47f08ac5ac16247f5720d4f1376006,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#8bc34aff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d3403decc86b166757377a70ea106001885242c9,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#7cb342ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d73a8b0bea131ce442dc6bc42d4b00e113b85b21,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#689f38ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ced4e6313bc935db9377852de2c5074e72a86cc5,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#558b2fff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:05db22f94129f601ae3c8185969666704dee2450,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#33691eff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:76c86302ef19ed646c8c5baa9d8d551ea699914b,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#ccff90ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e7b5e7ce77a3a57c9234383fbe08d5cc49ba75ba,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#b2ff59ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f7f9358c9bc92b34ba87532c236f0e8bb092e5d8,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#76ff03ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:cdf045c423fd5f1b1ddb96782344942d9c8476d4,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#64dd17ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:c0dcb76c78569ba35aca8b93dce48b4ddd80a51b,",
					exportKey: "color"
				}
			}
		}
	},
	purple: {
		"50": {
			description: "",
			type: "color",
			value: "#f3e5f5ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:14afb4f6562bc2852445cc0d127bbb7ae8959b8d,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#e1bee7ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8c01141b244637fa7a45466e6986a6f6f7ece6bb,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#ce93d8ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:03325aeb2b5b17946460529b8dc726195ecf0758,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#ba68c8ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6b8b20da9a76c4e91b5a080b919c77d566ec5576,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#ab47bcff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:3ab0f74296a1545e7b7073d223e6d7f0a6fc40f1,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#9c27b0ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:391e129db24b35d4a62ab6d81451d728e7ad516f,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#8e24aaff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:cce43558c797560499ece0be1b805f1cb5fd477a,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#7b1fa2ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:31205f3cde7836bdec51afa8b96c9ccd122de1f3,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#6a1b9aff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7581483355b319c1ff9ebd0e918e50909ca5294e,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#4a148cff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:4d17df673e3aa00e517fdd654c3a28c6b45ed1f4,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#ea80fcff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:52806a2f22a6b48ac0515166980bb9ef48cc3c70,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#e040fbff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:44d8a815af07eb42914d53ac429d354240b4718b,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#d500f9ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:616168f6577e33f57b213936a2bea530771889bf,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#aa00ffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d92664d5514bf165353187ae966115f77dd823cf,",
					exportKey: "color"
				}
			}
		}
	},
	lime: {
		"50": {
			description: "",
			type: "color",
			value: "#f9fbe7ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b4c968a995d1a4b3dfe0dc8117ff1b234435cd7a,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#f0f4c3ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:67191e1bb2d8dc724fa7a32b294617d91aca9003,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#e6ee9cff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:9d33789b97ecee156105dd61a49d67256be09192,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#dce775ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b7982b17f32841790364a8b8d120cdda97d392dd,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#d4e157ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:4e2dabfa9d30a672d6a0747b1c96da83bb041754,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#cddc39ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:eccff645d05ad8e25f00628b564322409d856f59,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#c0ca33ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:9a9d95473960701fb5fde3003fe0dbfee86cdfce,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#afb42bff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:10d3269c0b9f6b6f211436c395347345c52aa916,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#9e9d24ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8b6630525da33746a7c66c232f554590f9114180,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#827717ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:40f1da7c009d0b579cd3912daa73b994ed3ebb12,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#f4ff81ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:475cc83d0a5ca87b21557b924ff25f88733b88ac,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#eeff41ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:065bd7e10b73e5533c3b086727a9c4698a1c5a3d,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#c6ff00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e3e2c5e0b104c9f849ffba2181e44f6ea60548b6,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#aeea00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:db765f766f8d96b4d4de4a1aef47321c48a33999,",
					exportKey: "color"
				}
			}
		}
	},
	"light blue": {
		"50": {
			description: "",
			type: "color",
			value: "#e1f5feff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e3433bfd14c9da144bede08009bd0143f260728f,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#b3e5fcff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:c283a77217ca885a93197877c4968e7f19eece3b,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#81d4faff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ae0bd963be193a50b32aa2ed56b4e5271b428a0a,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#4fc3f7ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8389bd54c2c6c7a2da0ca8131090735c057b573b,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#29b6f6ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:bc8f19858fec1dd3025a526e2652143cbb6d2b27,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#03a9f4ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:87549e21c7c5b92cb43091c6d33c841d1afcad29,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#039be5ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ce601479218cc5fcfacf20b7cfbb6d47671b8f02,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#0288d1ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b67118c200977d335d30a98e6f54c6f7b39a531b,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#0277bdff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d54dcc3b51de1f4f0f8b4c03719f27af9da1366a,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#01579bff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:52ebe238dbd74bc32747c5a00fa041163362a338,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#80d8ffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:57c2bc422d5e7654ed7ca672566edbdcb3f2e81c,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#40c4ffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:87080246c52eb257d710b6f7d214c5a384de310e,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#00b0ffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:102b2937b1a1e0ed003bbfeaeb16524282205c18,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#0091eaff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:94ac7152a53f67c187ecfb0d9ee9004bde6b8614,",
					exportKey: "color"
				}
			}
		}
	},
	yellow: {
		"50": {
			description: "",
			type: "color",
			value: "#fffde7ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:c5e1e5e84cf2e65ece526c9217ba2a4d8d85bc6d,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#fff9c4ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f0ee2de219b651f9cebebaeddcd89a9434e48af0,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#fff59dff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:dc8820defa229f80f6c12ddc7f237b0b50821d23,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#fff176ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:19c68f2b31c21dbd431034bbd17c9f0c1e65ce62,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#ffee58ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b7ab30431e465ec0584f2760cb1cdb41eb0d2817,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#ffeb3bff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b4b65d96593381cf8f6b9e6faa73c2a3870e7f12,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#fdd835ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0afc61b74478d3e0040789b73ad3f01353faefbf,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#fbc02dff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6cf94844e5c4190a1b83f892497cb2b94e00e3cb,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#f9a825ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0d2bed532ff8bbcb96bcaff86e6012f3a9c1e4db,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#f57f17ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a019549f7a88b5524350bbe41a2d267a7cb8de05,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#ffff8dff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:32b47a9db424190a8aebd8e29ab6a7186131a1de,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#ffff00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f1e0ed068c4322d9f748b6a2b38874ce6ddf36c1,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#ffea00ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:dbd97350d3c79918c3641ce88e5f069dde773fa8,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#ffd600ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:88cbe45a5527e2fb8eb0fa32b67e2ee625e669bc,",
					exportKey: "color"
				}
			}
		}
	},
	cyan: {
		"50": {
			description: "",
			type: "color",
			value: "#e0f7faff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:9afe9722e18102644354f5fbdba7e34b6d5bcaab,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#b2ebf2ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:eefd3ce2b147ec9fc5af110259900e6cba79c988,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#80deeaff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:88359797af76e42255488c1d04ded7769774fd89,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#4dd0e1ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ae358ed25ac389cce01152667f515715d9d3a003,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#26c6daff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:658b45f43f6a6045abb3cc85de75a1b036408f08,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#00bcd4ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8bab522d3a7c109163b2ff39430a5b017a360c55,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#00acc1ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0b854b5d992b37a405e083cbe8818e33ad4a2471,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#0097a7ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:77e8e992fa1e7037933b454b9a114f42449faeb8,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#00838fff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:800d583b7525597d85cf34c51dbc2a16b17d9202,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#006064ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:21fa003283bf8f653ba2149580fb14ba2a000e24,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#84ffffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:57bc58b94c6253b41aefd7ea6793cae699655217,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#18ffffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:323ce17405ec65fd455aba81562616520647bc4f,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#00e5ffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d0caced115b0244ff2b539198d6e100f11dea877,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#00b8d4ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a8680f728295a9fa939a59a0afb342b657a71688,",
					exportKey: "color"
				}
			}
		}
	},
	teal: {
		"50": {
			description: "",
			type: "color",
			value: "#e0f2f1ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:9a0e5fdf50d609cde646b6ff697a255f03bbf77a,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#b2dfdbff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a4e50e6c5757120987655c93d70b5fbb8d1b9382,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#80cbc4ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7b46548901f1c8c06584d3f334dfef2af6d5a443,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#4db6acff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a1da438f298e7192cd6e945268de53e96350e777,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#26a69aff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:5cb95f1678a7bfaa9d37c35cffa33a5115e9cfcc,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#009688ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1697d9fc353809b39aad7930824a1d7b327b60ec,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#00897bff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:470889d05656840b6c7e19b6fc0a3026e522abcf,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#00796bff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1b2f6d76a815198dab8b2a1fc189865a8d3736b4,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#00695cff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1f3fd0c53cd50d55e7b6c292c3fe8cc834b56885,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#004d40ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8ff442e2cbc90d1d9479b3476c1ea4bc2c4b75d2,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#a7ffebff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:18b822ccd695d3f4b2d3470203410117fb7f3cf0,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#64ffdaff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:76bf5c8c4b97260a99716b37e3fcd4d91d0f05b1,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#1de9b6ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:cfc7a5c040648c10396fbcd58673e85c501d935a,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#00bfa5ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f1595af73b2da0b4a0a368b876e30ff550fe6586,",
					exportKey: "color"
				}
			}
		}
	},
	blue: {
		"50": {
			description: "",
			type: "color",
			value: "#e3f2fdff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e7c7d0a71a203efa1392d6985d1ae1b2d05c2f3f,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#bbdefbff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8327131dacab04560d4e2987a1c9ae23deb799e2,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#90caf9ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:596803e552e490f7dc789594200e3124c1d3bca8,",
					exportKey: "color"
				}
			}
		},
		"300": {
			"0": {
				type: "color",
				value: "#1976d2ff"
			},
			"1": {
				type: "color",
				value: "#ffffff4d"
			},
			description: "",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:48e9b4521c5b05f26c706d778a53a4b792d2621c,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#42a5f5ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6cbba713f5948863480434c007799165ab9ea4ee,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#007dffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1cc025c53a2e73379d4fac292f9efc4eb83466be,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#1e88e5ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:58ade36cc73291750840bae45ef7c9c226f9b903,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#0057b2ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:5c5f088f1f281aab3196be924e87370ebc0d47c5,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#1565c0ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f3b7d3f3200f49ff3d458bfb1eb708059949a3da,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#0d47a1ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8b829db1a21ae861783388a4934f6e0927d259e9,",
					exportKey: "color"
				}
			}
		},
		a100: {
			description: "",
			type: "color",
			value: "#82b1ffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:cb4ec63c3fcd4d393ab0de21e878b1c42471839e,",
					exportKey: "color"
				}
			}
		},
		a200: {
			description: "",
			type: "color",
			value: "#448affff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a945439d83c84710a34609ae4bac600091e5276b,",
					exportKey: "color"
				}
			}
		},
		a400: {
			description: "",
			type: "color",
			value: "#2979ffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:faf94fd52844004c23987d6a895f315897dc793b,",
					exportKey: "color"
				}
			}
		},
		a700: {
			description: "",
			type: "color",
			value: "#2962ffff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1b39e4e86336a9e83713f293fdaa86e3d67652ec,",
					exportKey: "color"
				}
			}
		}
	},
	"blue gray": {
		"50": {
			description: "",
			type: "color",
			value: "#eceff1ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:5d2ed9bf88723c3ecbe0190c9728200bb2a846f4,",
					exportKey: "color"
				}
			}
		},
		"100": {
			description: "",
			type: "color",
			value: "#cfd8dcff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:33c255ded4b41ee73d243036d9ba002de249a8ab,",
					exportKey: "color"
				}
			}
		},
		"200": {
			description: "",
			type: "color",
			value: "#b0bec5ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8b435267d7b02aafbf0f52f4841b6e3c3a2d6c02,",
					exportKey: "color"
				}
			}
		},
		"300": {
			description: "",
			type: "color",
			value: "#90a4aeff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:14675739b261eed290e8f34372fa1a6f9bde3018,",
					exportKey: "color"
				}
			}
		},
		"400": {
			description: "",
			type: "color",
			value: "#78909cff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:fc9d5fdc76a89f724e879040aedac393e79cb2bd,",
					exportKey: "color"
				}
			}
		},
		"500": {
			description: "",
			type: "color",
			value: "#607d8bff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:2b03858ae2c93a136f25a2e2178a943ce03b48f7,",
					exportKey: "color"
				}
			}
		},
		"600": {
			description: "",
			type: "color",
			value: "#546e7aff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e53d409f4248ebbe98bd883496fc92e5079a5765,",
					exportKey: "color"
				}
			}
		},
		"700": {
			description: "",
			type: "color",
			value: "#455a64ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6a8b6d8944c1c2a2f0d4390d2c13affe257e74d8,",
					exportKey: "color"
				}
			}
		},
		"800": {
			description: "",
			type: "color",
			value: "#37474fff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:38bda19950a903ee92e7a36d41591ff153cf9aa0,",
					exportKey: "color"
				}
			}
		},
		"900": {
			description: "",
			type: "color",
			value: "#263238ff",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0551f2523dc04ae5532b26316bfaaca6fc393a5c,",
					exportKey: "color"
				}
			}
		}
	}
};
var gradient = {
	light: {
		text: {
			"primary shades": {
				"30p ripple": {
					description: "Used for focus states with ripple enabled. The token represents 30% of the Text/Primary opacity",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#0000004d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:365b262b5d855ca6d42f5703c761ad5c5fa4b125,",
							exportKey: "gradient"
						}
					}
				}
			},
			"secondary shades": {
				"18p ripple": {
					description: "Used for focus states with ripple enabled. The token represents 30% of the Text/Secondary opacity",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#0000002e"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:c08a466d4532d2f64317f971288a38714a9003fd,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		primary: {
			shades: {
				"30p ripple": {
					description: "Used for focus visible states with ripple enabled. The token represents 30% of the Primary/Main token",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#1976d24d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:253a56ca28a481538887a4d196b0b45b8c4d55c6,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		secondary: {
			shades: {
				"30p ripple": {
					description: "Used for focus visible states with ripple enabled. The token represents 30% of the Secondary/Main token",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#9c27b04d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:5a1a8177c72ddd85afb552bb55eaa46b7d894fb7,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		action: {
			shades: {
				"30p ripple": {
					description: "",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#0000004d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:dcd5fda7a16c72f8c5c4251c2dd8bdd5a4dd83a4,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		error: {
			shades: {
				"30p ripple": {
					description: "Used for focus visible states with ripple enabled. The token represents 30% of the Error/Main token",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#d32f2f4d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:e4492367c57fb2391d4a303a6d27e0514fb0ba9c,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		warning: {
			shades: {
				"30p ripple": {
					description: "Used for focus visible states with ripple enabled. The token represents 30% of the Warning/Main token",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#ed6c024d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:49724160c5ea77ae62b3bdf5a69d35066d4a7342,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		info: {
			shades: {
				"30p ripple": {
					description: "Used for focus visible states with ripple enabled. The token represents 30% of the Warning/Main token",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#0288d14d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:4da3fca458b82ba37f8a22189861bd80334ff737,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		success: {
			shades: {
				"30p ripple": {
					description: "Used for focus visible states with ripple enabled. The token represents 30% of the Success/Main token",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#2e7d324d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:2d144a96a08a036bfb94f562a11dfc797814abc1,",
							exportKey: "gradient"
						}
					}
				}
			}
		}
	},
	dark: {
		text: {
			"primary shades": {
				"30p ripple": {
					description: "",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#ffffff4d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:b689b679114f3c9981d5e313a4c52e233c8b7cd1,",
							exportKey: "gradient"
						}
					}
				}
			},
			"secondary shades": {
				"18p ripple": {
					description: "",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#ffffff2e"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:95f031f4cd7f2b549569da2b3e396a1163ef9060,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		primary: {
			shades: {
				"30p ripple": {
					description: "",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#90caf94d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:3325d62aa8b3f54e97d9bfbc454f1b55877fb5b1,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		secondary: {
			shades: {
				"30p ripple": {
					description: "",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#ce93d84d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:929196000022224e06878d44718df94ceaf1298e,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		action: {
			shades: {
				"30p ripple": {
					description: "",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#ffffff4d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:be6b0b9e91e421a6b6cf5b46a7be6246199eb913,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		error: {
			shades: {
				"30p ripple": {
					description: "",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#f443364d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:f6ae3e7043f48c57a817d31ac2ffa5c98b4acaa0,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		warning: {
			shades: {
				"30p ripple": {
					description: "",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#ffa7264d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:df4bc4369583b3d52ad68cc6df37a25b37b74f77,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		info: {
			shades: {
				"30p ripple": {
					description: "",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#0288d14d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:e98552804399edcdcf96d9fe5d7c926c56b92c1f,",
							exportKey: "gradient"
						}
					}
				}
			}
		},
		success: {
			shades: {
				"30p ripple": {
					description: "",
					type: "custom-gradient",
					value: {
						gradientType: "radial",
						rotation: 154.9498631100795,
						stops: [
							{
								position: 1,
								color: "#66bb6a4d"
							},
							{
								position: 1,
								color: "#ffffffff"
							}
						]
					},
					extensions: {
						"org.lukasoppermann.figmaDesignTokens": {
							styleId: "S:e1815fe4086ca073d24d0c1bf3c24431364d4a11,",
							exportKey: "gradient"
						}
					}
				}
			}
		}
	},
	common: {
		black: {
			"30p ripple": {
				description: "",
				type: "custom-gradient",
				value: {
					gradientType: "radial",
					rotation: 154.9498631100795,
					stops: [
						{
							position: 1,
							color: "#0000004d"
						},
						{
							position: 1,
							color: "#ffffffff"
						}
					]
				},
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:b047bdc5e64963ed42e31506fdd4300622f0b561,",
						exportKey: "gradient"
					}
				}
			}
		},
		white: {
			"30p ripple": {
				description: "Used for focus states. The token represents 30% of the #FFF opacity",
				type: "custom-gradient",
				value: {
					gradientType: "radial",
					rotation: 154.9498631100795,
					stops: [
						{
							position: 1,
							color: "#ffffff4d"
						},
						{
							position: 1,
							color: "#ffffffff"
						}
					]
				},
				extensions: {
					"org.lukasoppermann.figmaDesignTokens": {
						styleId: "S:02c7059082fa53d0a8669ea19c0f1ebc4b9fa4b9,",
						exportKey: "gradient"
					}
				}
			}
		}
	}
};
var grid = {
	"extra large": {
		"layout structure false": {
			description: "Max width 1536px",
			type: "custom-grid",
			value: {
				pattern: "columns",
				sectionSize: 102,
				gutterSize: 24,
				alignment: "center",
				count: 12
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6949ef74397c0b08200a4ffc9e444670ba10dd82,",
					exportKey: "grid"
				}
			}
		},
		"layout structure true": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 102,
					gutterSize: 24,
					alignment: "center",
					count: 12
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			"2": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 1536px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:67a2454310ed443651bbd810dd937628126eab90,",
					exportKey: "grid"
				}
			}
		},
		"layout structure extended": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 102,
					gutterSize: 24,
					alignment: "center",
					count: 12
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 256,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			"2": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 1536px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:51df6a62c7b5c71ffa0ab4e44681bbc19677597f,",
					exportKey: "grid"
				}
			}
		}
	},
	large: {
		"layout structure false": {
			description: "Max width 1200px",
			type: "custom-grid",
			value: {
				pattern: "columns",
				sectionSize: 74,
				gutterSize: 24,
				alignment: "center",
				count: 12
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e6a36b97173ab25d83ce51dc56e259575ab25994,",
					exportKey: "grid"
				}
			}
		},
		"layout structure true": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 74,
					gutterSize: 24,
					alignment: "center",
					count: 12
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			"2": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 1200px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a16ff91c6c49f613cc92eed7557e7c310092c483,",
					exportKey: "grid"
				}
			}
		},
		"layout structure extended": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 74,
					gutterSize: 24,
					alignment: "center",
					count: 12
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 256,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			"2": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 1200px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:922eac3cfac3fde4ee847adc59f706c85c77a3c5,",
					exportKey: "grid"
				}
			}
		}
	},
	medium: {
		"layout structure false": {
			description: "Max width 900px",
			type: "custom-grid",
			value: {
				pattern: "columns",
				sectionSize: 49,
				gutterSize: 24,
				alignment: "center",
				count: 12
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:cedca27a163a3ddc85eab336fcb44b5d44c46d03,",
					exportKey: "grid"
				}
			}
		},
		"layout structure true": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 49,
					gutterSize: 24,
					alignment: "center",
					count: 12
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			"2": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 900px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:6998ad4affd19824b0e072479fa5cec4e7a7dc42,",
					exportKey: "grid"
				}
			}
		}
	},
	small: {
		"layout structure false": {
			description: "Max width 600px",
			type: "custom-grid",
			value: {
				pattern: "columns",
				sectionSize: 24,
				gutterSize: 24,
				alignment: "center",
				count: 12
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ae83a0d5e06035ea2f1abe41da3c454bcf36ac29,",
					exportKey: "grid"
				}
			}
		},
		"layout structure true": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 24,
					gutterSize: 24,
					alignment: "center",
					count: 12
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 64,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			"2": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 56,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 600px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:bab532f890efb71e8c2303d1ff879c458825bde7,",
					exportKey: "grid"
				}
			}
		}
	},
	"extra small": {
		"layout structure false": {
			description: "Max width 444px",
			type: "custom-grid",
			value: {
				pattern: "columns",
				sectionSize: 12,
				gutterSize: 24,
				alignment: "center",
				count: 12
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:2c8b4fec36af23ac30ebc49854571b59c8e37a78,",
					exportKey: "grid"
				}
			}
		},
		"layout structure true": {
			"0": {
				type: "custom-grid",
				value: {
					pattern: "columns",
					sectionSize: 12,
					gutterSize: 24,
					alignment: "center",
					count: 12
				}
			},
			"1": {
				type: "custom-grid",
				value: {
					pattern: "rows",
					sectionSize: 56,
					gutterSize: 1,
					alignment: "min",
					count: 1,
					offset: 0
				}
			},
			description: "Max width 444px",
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:da1d6886f995e056e3f9c5f4d28ded11413534b7,",
					exportKey: "grid"
				}
			}
		}
	}
};
var font = {
	typography: {
		h1: {
			type: "custom-fontStyle",
			value: {
				fontSize: 96,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 300,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -1.5,
				lineHeight: 112.032,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e328938a84225d402dea0c9c944ce4dd0a146d56,",
					exportKey: "font"
				}
			}
		},
		h2: {
			type: "custom-fontStyle",
			value: {
				fontSize: 60,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 300,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: -0.5,
				lineHeight: 72,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:347b231583fd5079b7504f3552b7fbe9aaae1899,",
					exportKey: "font"
				}
			}
		},
		h3: {
			type: "custom-fontStyle",
			value: {
				fontSize: 48,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 56.016,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:c8d30c2f4cbfcdb3521b8dc9855029b6e3a55d19,",
					exportKey: "font"
				}
			}
		},
		h4: {
			type: "custom-fontStyle",
			value: {
				fontSize: 34,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.25,
				lineHeight: 41.99,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b337b615c5f3638ad1ff947bf65f4c269228793a,",
					exportKey: "font"
				}
			}
		},
		h5: {
			type: "custom-fontStyle",
			value: {
				fontSize: 24,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 32.016,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:aef741f7f2dc49957f18b3b6e8ef8667d4cabdb3,",
					exportKey: "font"
				}
			}
		},
		h6: {
			type: "custom-fontStyle",
			value: {
				fontSize: 20,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.15,
				lineHeight: 32,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:972464868034a1a3fd78b25f970c2b9ee077b67a,",
					exportKey: "font"
				}
			}
		},
		"body 1": {
			type: "custom-fontStyle",
			value: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.15,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7f0d0f64ad7e8098a17b1bba83a8d591c88436f3,",
					exportKey: "font"
				}
			}
		},
		"body 2": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.17,
				lineHeight: 20.02,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:2fae9f11f44a067f4c49d7a8b299dc22544016bf,",
					exportKey: "font"
				}
			}
		},
		"subtitle 1": {
			type: "custom-fontStyle",
			value: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.15,
				lineHeight: 28,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e144dfc3054bbb49a072515e7e5452853a0d022d,",
					exportKey: "font"
				}
			}
		},
		"subtitle 2": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.1,
				lineHeight: 21.98,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f977fee167d4a69fe8963b93b38d514cef70c784,",
					exportKey: "font"
				}
			}
		},
		overline: {
			type: "custom-fontStyle",
			value: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 1,
				lineHeight: 31.92,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "uppercase"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8a3295952b627f066378ac118f3df2fbcc8b245f,",
					exportKey: "font"
				}
			}
		},
		caption: {
			type: "custom-fontStyle",
			value: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.4,
				lineHeight: 19.92,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:3da67fe5e72d021ae3d23bcd39f32420f5a4e8d4,",
					exportKey: "font"
				}
			}
		}
	},
	components: {
		"alert title": {
			type: "custom-fontStyle",
			value: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.15,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:4e0f752a3af7d1021d1401c07c7e15b9f9401818,",
					exportKey: "font"
				}
			}
		},
		"avatar initials": {
			type: "custom-fontStyle",
			value: {
				fontSize: 20,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.14,
				lineHeight: 20,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:cc5bc41ca184640b15280d6803a2a2548b636bcc,",
					exportKey: "font"
				}
			}
		},
		"badge label": {
			type: "custom-fontStyle",
			value: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.14,
				lineHeight: 20,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:288a72a05a8f5ff49ba8a8f3e95e190dab6a29e0,",
					exportKey: "font"
				}
			}
		},
		"button large": {
			type: "custom-fontStyle",
			value: {
				fontSize: 15,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.46,
				lineHeight: 26,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "uppercase"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e1362908f63cbf266b0f5445c004222a7f4f359e,",
					exportKey: "font"
				}
			}
		},
		"button medium": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.4,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "uppercase"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:1766256f7840deb08a24ff03aba4ce98a48516f3,",
					exportKey: "font"
				}
			}
		},
		"button small": {
			type: "custom-fontStyle",
			value: {
				fontSize: 13,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.46,
				lineHeight: 22,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "uppercase"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8c643d34f37ed5e7506e35f2192d04f1271235c3,",
					exportKey: "font"
				}
			}
		},
		"input label": {
			type: "custom-fontStyle",
			value: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.15,
				lineHeight: 12,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:c975e130146972fc9867255048f80e58e410632f,",
					exportKey: "font"
				}
			}
		},
		"helper text": {
			type: "custom-fontStyle",
			value: {
				fontSize: 12,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.4,
				lineHeight: 20,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:ae0af997b6b5dcdfd4325961a2b3b65712949e86,",
					exportKey: "font"
				}
			}
		},
		"input text": {
			type: "custom-fontStyle",
			value: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.15,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7a740c66f28a8857357471be18cc13a0e6b1a3f2,",
					exportKey: "font"
				}
			}
		},
		chip: {
			type: "custom-fontStyle",
			value: {
				fontSize: 13,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.16,
				lineHeight: 18,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:9a68f8772e99707329097aafa858196753ac740a,",
					exportKey: "font"
				}
			}
		},
		tooltip: {
			type: "custom-fontStyle",
			value: {
				fontSize: 10,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0,
				lineHeight: 14,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:bc49d4743b4c0e948e213a979ff6bf9e8cb9b796,",
					exportKey: "font"
				}
			}
		},
		"table header": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.17,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:379f067a0f605fddcf64673fab06894c3d334cc9,",
					exportKey: "font"
				}
			}
		},
		"menu item": {
			type: "custom-fontStyle",
			value: {
				fontSize: 16,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.15,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:721dd55fb994246d64c392f81749503b83920f36,",
					exportKey: "font"
				}
			}
		},
		"menu item dense": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.17,
				lineHeight: 24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:caf30983fd30cca1cf782d03c2b2a847fbb5052b,",
					exportKey: "font"
				}
			}
		},
		"list subheader": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 500,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.1,
				lineHeight: 48,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:0071ba94788ac1f474330e34172342e5a2132823,",
					exportKey: "font"
				}
			}
		},
		"bottom navigation active label": {
			type: "custom-fontStyle",
			value: {
				fontSize: 14,
				textDecoration: "none",
				fontFamily: "Roboto",
				fontWeight: 400,
				fontStyle: "normal",
				fontStretch: "normal",
				letterSpacing: 0.4,
				lineHeight: 23.24,
				paragraphIndent: 0,
				paragraphSpacing: 0,
				textCase: "none"
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:66e2bb89472659d4f538e98819f76c74b41c735a,",
					exportKey: "font"
				}
			}
		}
	}
};
var effect = {
	elevation: {
		"1": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 3,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 1,
					spread: 0
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 1,
					color: "#00000024",
					offsetX: 0,
					offsetY: 1,
					spread: 0
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 1,
					color: "#00000033",
					offsetX: 0,
					offsetY: 2,
					spread: -1
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8daf74cb91d36ee650ae767c67e41c90feec1907,",
					exportKey: "effect"
				}
			}
		},
		"2": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 5,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 1,
					spread: 0
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 2,
					color: "#00000024",
					offsetX: 0,
					offsetY: 2,
					spread: 0
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 1,
					color: "#00000033",
					offsetX: 0,
					offsetY: 3,
					spread: -2
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8937f20e65f65bf9e8b16553bf1640102229d00e,",
					exportKey: "effect"
				}
			}
		},
		"3": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 8,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 1,
					spread: 0
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 4,
					color: "#00000024",
					offsetX: 0,
					offsetY: 3,
					spread: 0
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 3,
					color: "#00000033",
					offsetX: 0,
					offsetY: 3,
					spread: -2
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:9ad668dba851d5cf4af79136f27c5a9651e126db,",
					exportKey: "effect"
				}
			}
		},
		"4": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 10,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 1,
					spread: 0
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 5,
					color: "#00000024",
					offsetX: 0,
					offsetY: 4,
					spread: 0
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 4,
					color: "#00000033",
					offsetX: 0,
					offsetY: 2,
					spread: -1
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a23e45ff5343bc75f2ab6fba912a807c98092c32,",
					exportKey: "effect"
				}
			}
		},
		"5": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 14,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 1,
					spread: 0
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 8,
					color: "#00000024",
					offsetX: 0,
					offsetY: 5,
					spread: 0
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 5,
					color: "#00000033",
					offsetX: 0,
					offsetY: 3,
					spread: -1
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d2aeb9886754a653c9eab47832d75c41ce8b05c7,",
					exportKey: "effect"
				}
			}
		},
		"6": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 18,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 1,
					spread: 0
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 10,
					color: "#00000024",
					offsetX: 0,
					offsetY: 6,
					spread: 0
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 5,
					color: "#00000033",
					offsetX: 0,
					offsetY: 3,
					spread: -1
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:10fa6d10744948f433c66ec964e8b82a14a2dc68,",
					exportKey: "effect"
				}
			}
		},
		"7": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 16,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 2,
					spread: 1
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 10,
					color: "#00000024",
					offsetX: 0,
					offsetY: 7,
					spread: 1
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 5,
					color: "#00000033",
					offsetX: 0,
					offsetY: 4,
					spread: -2
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:19b94a37f74f9d8443437b8b9e7b47e8eea0f8af,",
					exportKey: "effect"
				}
			}
		},
		"8": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 14,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 3,
					spread: 2
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 10,
					color: "#00000024",
					offsetX: 0,
					offsetY: 8,
					spread: 1
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 5,
					color: "#00000033",
					offsetX: 0,
					offsetY: 5,
					spread: -3
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:abccdd821b6ae7c98524fee410060c52c78e95f0,",
					exportKey: "effect"
				}
			}
		},
		"9": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 16,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 3,
					spread: 2
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 12,
					color: "#00000024",
					offsetX: 0,
					offsetY: 9,
					spread: 1
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 6,
					color: "#00000033",
					offsetX: 0,
					offsetY: 5,
					spread: -3
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:b7c37eabb6029e953a106e89f5d5c5f5ff8306c6,",
					exportKey: "effect"
				}
			}
		},
		"10": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 18,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 4,
					spread: 3
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 14,
					color: "#00000024",
					offsetX: 0,
					offsetY: 10,
					spread: 1
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 6,
					color: "#00000033",
					offsetX: 0,
					offsetY: 6,
					spread: -3
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:8d298f3fa21d6bf37822164c97544a605e2a50b9,",
					exportKey: "effect"
				}
			}
		},
		"11": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 20,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 4,
					spread: 3
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 15,
					color: "#00000024",
					offsetX: 0,
					offsetY: 11,
					spread: 1
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 7,
					color: "#00000033",
					offsetX: 0,
					offsetY: 6,
					spread: -4
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:132ff7cb21732ffbe3b21bd535e5ee7f5416db5c,",
					exportKey: "effect"
				}
			}
		},
		"12": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 22,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 5,
					spread: 4
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 17,
					color: "#00000024",
					offsetX: 0,
					offsetY: 12,
					spread: 2
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 8,
					color: "#00000033",
					offsetX: 0,
					offsetY: 7,
					spread: -4
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:381567d79280e49ffbde4180ffa99366c14da029,",
					exportKey: "effect"
				}
			}
		},
		"13": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 24,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 5,
					spread: 4
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 19,
					color: "#00000024",
					offsetX: 0,
					offsetY: 13,
					spread: 2
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 8,
					color: "#00000033",
					offsetX: 0,
					offsetY: 7,
					spread: -4
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:fb44dc736db08d8364a5b53d70543867c4c3f5dd,",
					exportKey: "effect"
				}
			}
		},
		"14": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 26,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 5,
					spread: 4
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 21,
					color: "#00000024",
					offsetX: 0,
					offsetY: 14,
					spread: 2
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 9,
					color: "#00000033",
					offsetX: 0,
					offsetY: 7,
					spread: -4
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:83a61b34d2196ae7c1ca098c8966e23990747598,",
					exportKey: "effect"
				}
			}
		},
		"15": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 28,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 6,
					spread: 5
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 22,
					color: "#00000024",
					offsetX: 0,
					offsetY: 15,
					spread: 2
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 9,
					color: "#00000033",
					offsetX: 0,
					offsetY: 8,
					spread: -5
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e26da743907d06b12b5ec4c2ec4bdbafb22b2d88,",
					exportKey: "effect"
				}
			}
		},
		"16": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 30,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 6,
					spread: 5
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 24,
					color: "#00000024",
					offsetX: 0,
					offsetY: 16,
					spread: 2
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 10,
					color: "#00000033",
					offsetX: 0,
					offsetY: 8,
					spread: -5
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:a462281c824cded01329c23b917fc6ab330662dd,",
					exportKey: "effect"
				}
			}
		},
		"17": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 32,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 6,
					spread: 5
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 26,
					color: "#00000024",
					offsetX: 0,
					offsetY: 17,
					spread: 2
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 11,
					color: "#00000033",
					offsetX: 0,
					offsetY: 8,
					spread: -5
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:95ce2d6d788db5502eff9c1f24878df77c661999,",
					exportKey: "effect"
				}
			}
		},
		"18": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 34,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 7,
					spread: 6
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 28,
					color: "#00000024",
					offsetX: 0,
					offsetY: 18,
					spread: 2
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 11,
					color: "#00000033",
					offsetX: 0,
					offsetY: 9,
					spread: -5
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:295dd7eb85803a454d8a6f333db77de346f6605f,",
					exportKey: "effect"
				}
			}
		},
		"19": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 36,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 7,
					spread: 6
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 29,
					color: "#00000024",
					offsetX: 0,
					offsetY: 19,
					spread: 2
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 12,
					color: "#00000033",
					offsetX: 0,
					offsetY: 9,
					spread: -6
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f57c0512626343875c8be3777479b813832e0b21,",
					exportKey: "effect"
				}
			}
		},
		"20": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 38,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 8,
					spread: 7
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 31,
					color: "#00000024",
					offsetX: 0,
					offsetY: 20,
					spread: 3
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 13,
					color: "#00000033",
					offsetX: 0,
					offsetY: 10,
					spread: -6
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:35c2032b717009d7724ba805735309d150cf6b71,",
					exportKey: "effect"
				}
			}
		},
		"21": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 40,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 8,
					spread: 7
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 33,
					color: "#00000024",
					offsetX: 0,
					offsetY: 21,
					spread: 3
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 13,
					color: "#00000033",
					offsetX: 0,
					offsetY: 10,
					spread: -6
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:7de8c0000dee19af8a533333c5c8f80c07f239e2,",
					exportKey: "effect"
				}
			}
		},
		"22": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 42,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 8,
					spread: 7
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 35,
					color: "#00000024",
					offsetX: 0,
					offsetY: 22,
					spread: 3
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 14,
					color: "#00000033",
					offsetX: 0,
					offsetY: 10,
					spread: -6
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:e464f3290455e520e15065c045b01432e07d3219,",
					exportKey: "effect"
				}
			}
		},
		"23": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 44,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 9,
					spread: 8
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 36,
					color: "#00000024",
					offsetX: 0,
					offsetY: 23,
					spread: 3
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 14,
					color: "#00000033",
					offsetX: 0,
					offsetY: 11,
					spread: -7
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:db922170c0629340e91270e6c09cb4f990abbc27,",
					exportKey: "effect"
				}
			}
		},
		"24": {
			"0": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 46,
					color: "#0000001f",
					offsetX: 0,
					offsetY: 9,
					spread: 8
				}
			},
			"1": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 38,
					color: "#00000024",
					offsetX: 0,
					offsetY: 24,
					spread: 3
				}
			},
			"2": {
				type: "custom-shadow",
				value: {
					shadowType: "dropShadow",
					radius: 15,
					color: "#00000033",
					offsetX: 0,
					offsetY: 11,
					spread: -7
				}
			},
			description: null,
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:d8ae7f30f672b34836e12b1eeab4235a7596a758,",
					exportKey: "effect"
				}
			}
		},
		"outlined light": {
			description: null,
			type: "custom-shadow",
			value: {
				shadowType: "dropShadow",
				radius: 0,
				color: "#e0e0e0ff",
				offsetX: 0,
				offsetY: 0,
				spread: 1
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:f3332c042c7870abaff8c6c27f91089e98d971b3,",
					exportKey: "effect"
				}
			}
		},
		"outlined dark": {
			description: null,
			type: "custom-shadow",
			value: {
				shadowType: "dropShadow",
				radius: 0,
				color: "#ffffff1f",
				offsetX: 0,
				offsetY: 0,
				spread: 1
			},
			extensions: {
				"org.lukasoppermann.figmaDesignTokens": {
					styleId: "S:19b5f60efb3f27260cfcd8f89297dda6f2fa11e0,",
					exportKey: "effect"
				}
			}
		}
	}
};
var typography = {
	typography: {
		h1: {
			fontSize: {
				type: "dimension",
				value: 96
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 300
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: -1.5
			},
			lineHeight: {
				type: "dimension",
				value: 112.032
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		h2: {
			fontSize: {
				type: "dimension",
				value: 60
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 300
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: -0.5
			},
			lineHeight: {
				type: "dimension",
				value: 72
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		h3: {
			fontSize: {
				type: "dimension",
				value: 48
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 56.016
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		h4: {
			fontSize: {
				type: "dimension",
				value: 34
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.25
			},
			lineHeight: {
				type: "dimension",
				value: 41.99
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		h5: {
			fontSize: {
				type: "dimension",
				value: 24
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 32.016
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		h6: {
			fontSize: {
				type: "dimension",
				value: 20
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 500
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.15
			},
			lineHeight: {
				type: "dimension",
				value: 32
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"body 1": {
			fontSize: {
				type: "dimension",
				value: 16
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.15
			},
			lineHeight: {
				type: "dimension",
				value: 24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"body 2": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.17
			},
			lineHeight: {
				type: "dimension",
				value: 20.02
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"subtitle 1": {
			fontSize: {
				type: "dimension",
				value: 16
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.15
			},
			lineHeight: {
				type: "dimension",
				value: 28
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"subtitle 2": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 500
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.1
			},
			lineHeight: {
				type: "dimension",
				value: 21.98
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		overline: {
			fontSize: {
				type: "dimension",
				value: 12
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 1
			},
			lineHeight: {
				type: "dimension",
				value: 31.92
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "uppercase"
			}
		},
		caption: {
			fontSize: {
				type: "dimension",
				value: 12
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.4
			},
			lineHeight: {
				type: "dimension",
				value: 19.92
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		}
	},
	components: {
		"alert title": {
			fontSize: {
				type: "dimension",
				value: 16
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 500
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.15
			},
			lineHeight: {
				type: "dimension",
				value: 24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"avatar initials": {
			fontSize: {
				type: "dimension",
				value: 20
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.14
			},
			lineHeight: {
				type: "dimension",
				value: 20
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"badge label": {
			fontSize: {
				type: "dimension",
				value: 12
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 500
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.14
			},
			lineHeight: {
				type: "dimension",
				value: 20
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"button large": {
			fontSize: {
				type: "dimension",
				value: 15
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 500
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.46
			},
			lineHeight: {
				type: "dimension",
				value: 26
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "uppercase"
			}
		},
		"button medium": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 500
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.4
			},
			lineHeight: {
				type: "dimension",
				value: 24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "uppercase"
			}
		},
		"button small": {
			fontSize: {
				type: "dimension",
				value: 13
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 500
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.46
			},
			lineHeight: {
				type: "dimension",
				value: 22
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "uppercase"
			}
		},
		"input label": {
			fontSize: {
				type: "dimension",
				value: 12
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.15
			},
			lineHeight: {
				type: "dimension",
				value: 12
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"helper text": {
			fontSize: {
				type: "dimension",
				value: 12
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.4
			},
			lineHeight: {
				type: "dimension",
				value: 20
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"input text": {
			fontSize: {
				type: "dimension",
				value: 16
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.15
			},
			lineHeight: {
				type: "dimension",
				value: 24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		chip: {
			fontSize: {
				type: "dimension",
				value: 13
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.16
			},
			lineHeight: {
				type: "dimension",
				value: 18
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		tooltip: {
			fontSize: {
				type: "dimension",
				value: 10
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 500
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0
			},
			lineHeight: {
				type: "dimension",
				value: 14
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"table header": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 500
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.17
			},
			lineHeight: {
				type: "dimension",
				value: 24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"menu item": {
			fontSize: {
				type: "dimension",
				value: 16
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.15
			},
			lineHeight: {
				type: "dimension",
				value: 24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"menu item dense": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.17
			},
			lineHeight: {
				type: "dimension",
				value: 24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"list subheader": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 500
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.1
			},
			lineHeight: {
				type: "dimension",
				value: 48
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		},
		"bottom navigation active label": {
			fontSize: {
				type: "dimension",
				value: 14
			},
			textDecoration: {
				type: "string",
				value: "none"
			},
			fontFamily: {
				type: "string",
				value: "Roboto"
			},
			fontWeight: {
				type: "number",
				value: 400
			},
			fontStyle: {
				type: "string",
				value: "normal"
			},
			fontStretch: {
				type: "string",
				value: "normal"
			},
			letterSpacing: {
				type: "dimension",
				value: 0.4
			},
			lineHeight: {
				type: "dimension",
				value: 23.24
			},
			paragraphIndent: {
				type: "dimension",
				value: 0
			},
			paragraphSpacing: {
				type: "dimension",
				value: 0
			},
			textCase: {
				type: "string",
				value: "none"
			}
		}
	}
};
var design = {
	color: color,
	gradient: gradient,
	grid: grid,
	font: font,
	effect: effect,
	typography: typography
};

var mappedTheme = {
    palette: {
        text: Object.entries(design.color.light.text).reduce(
        // @ts-ignore
        function (acc, cur) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[cur[0]] = cur[1].value, _a)));
        }, {}),
        primary: Object.entries(design.color.light.primary).reduce(
        // @ts-ignore
        function (acc, cur) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[cur[0]] = cur[1].value, _a)));
        }, {})
    }
};
var theme = createTheme(mappedTheme);
// @ts-ignore
var ThemeProvider = function (props) { return React__default.createElement(ThemeProvider$1, __assign({ theme: theme }, props)); };

export { ThemeProvider, theme as default, theme };
//# sourceMappingURL=index.js.map
