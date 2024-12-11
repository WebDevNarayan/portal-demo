import * as React from "react";
import { useEffect, useRef } from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import {
  TreeViewComponent,
  ToolbarComponent,
  ItemsDirective,
  ItemDirective,
} from "@syncfusion/ej2-react-navigations";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { Outlet, useNavigate } from "react-router-dom";
const AppLayout = () => {
  let sidebarobj = useRef(null);
  const navigate = useNavigate();

  let data = [
    {
      nodeId: "01",
      nodeText: "Dashboard",
      iconCss: "icon-microchip icon",
      path: "/",
    },
    {
      nodeId: "02",
      nodeText: "CMS",
      iconCss: "icon-th icon",
      nodeChild: [
        {
          nodeId: "02-01",
          nodeText: "Bin Management",
          iconCss: "icon-circle-thin icon",
          path: "/cms/bin",
        },
        {
          nodeId: "02-02",
          nodeText: "Card Product",
          iconCss: "icon-circle-thin icon",
          path: "/cms/cardproduct",
        },
        {
          nodeId: "02-03",
          nodeText: "Virtual Card",
          iconCss: "icon-circle-thin icon",
          path: "/cms/virtualcard",
        },
        {
          nodeId: "02-04",
          nodeText: "Transaction Log",
          iconCss: "icon-circle-thin icon",
          path: "/cms/transactionlog",
        },
      ],
    },
    {
      nodeId: "03",
      nodeText: "CBS",
      iconCss: "icon-code icon",
      nodeChild: [
        {
          nodeId: "03-01",
          nodeText: "Account Product",
          iconCss: "icon-circle-thin icon",
          path: "/cbs/accountproduct",
        },
        {
          nodeId: "03-02",
          nodeText: "Journal",
          iconCss: "icon-circle-thin icon",
          path: "/cbs/journal",
        },
        {
          nodeId: "03-03",
          nodeText: "Billing Cycle",
          iconCss: "icon-circle-thin icon",
          path: "/cbs/billingcycle",
        },
        {
          nodeId: "03-04",
          nodeText: "Credit Setting",
          iconCss: "icon-circle-thin icon",
          path: "/cbs/creditsetting",
          nodeChild: [
            {
              nodeId: "03-04-01",
              nodeText: "Base Interest",
              iconCss: "icon-circle-thin icon",
              path: "/cbs/creditsetting/baseinterest",
            },
            {
              nodeId: "03-04-02",
              nodeText: "Product Interest",
              iconCss: "icon-circle-thin icon",
              path: "/cbs/creditsetting/productinterest",
            },
          ],
        },
      ],
    },
    {
      nodeId: "04",
      nodeText: "Settlement",
      iconCss: "icon-code icon",
      path: "/settlement",
    },
    {
      nodeId: "05",
      nodeText: "Rules",
      iconCss: "icon-code icon",
      path: "/rules",
    },
    {
      nodeId: "06",
      nodeText: "Customer",
      iconCss: "icon-code icon",
      path: "/customer",
    },
    {
      nodeId: "07",
      nodeText: "User Management",
      iconCss: "icon-code icon",
      nodeChild: [
        {
          nodeId: "07-01",
          nodeText: "Roles",
          iconCss: "icon-circle-thin icon",
          path: "/usermanagement/roles",
        },
        {
          nodeId: "07-02",
          nodeText: "User",
          iconCss: "icon-circle-thin icon",
          path: "/usermanagement/user",
        },
      ],
    },
    {
      nodeId: "08",
      nodeText: "Forex",
      iconCss: "icon-code icon",
      nodeChild: [
        {
          nodeId: "08-01",
          nodeText: "Currency Rate",
          iconCss: "icon-circle-thin icon",
          path: "/forex/currencyrate",
        },
        {
          nodeId: "08-02",
          nodeText: "Forex Group",
          iconCss: "icon-circle-thin icon",
          path: "/forex/forexgroup",
        },
      ],
    },
    {
      nodeId: "09",
      nodeText: "Rewards",
      iconCss: "icon-code icon",
      nodeChild: [
        {
          nodeId: "09-01",
          nodeText: "Coinfig",
          iconCss: "icon-circle-thin icon",
          path: "/rewards/config",
        },
        {
          nodeId: "09-02",
          nodeText: "Account",
          iconCss: "icon-circle-thin icon",
          path: "/rewards/account",
        },
        {
          nodeId: "09-03",
          nodeText: "Claims",
          iconCss: "icon-circle-thin icon",
          path: "/rewards/claims",
        },
        {
          nodeId: "09-04",
          nodeText: "Details",
          iconCss: "icon-circle-thin icon",
          path: "/rewards/details",
        },
      ],
    },
    {
      nodeId: "10",
      nodeText: "Audit Logs",
      iconCss: "icon-code icon",
      path: "/auditlogs",
    },
    {
      nodeId: "10",
      nodeText: "Astra Stack",
      iconCss: "icon-code icon",
      path: "/astrastack",
    },
  ];
  const width = "290px";
  const target = ".main-sidebar-content";
  const mediaQuery = "(min-width: 600px)";
  const fields = {
    dataSource: data,
    id: "nodeId",
    text: "nodeText",
    child: "nodeChild",
    iconCss: "iconCss",
  };

  const onNodeSelected = (event) => {
    const selectedNodeId = event.nodeData.id; // Get the node ID
    const findPath = (nodes, nodeId) => {
      for (const node of nodes) {
        if (node.nodeId === nodeId) {
          return node.path;
        }
        if (node.nodeChild) {
          const childPath = findPath(node.nodeChild, nodeId);
          if (childPath) return childPath;
        }
      }
      return null; // Return null if no match found
    };

    const path = findPath(data, selectedNodeId);

    if (path) {
      navigate(path); // Navigate if the path exists
    } else {
      console.warn("No path provided for the selected node:", event.nodeData);
    }
  };

  let folderEle =
    '<div class= "e-folder"><div class= "e-folder-name">Navigation Pane</div></div>';
  //toggle the sidebar
  const toolbarCliked = () => {
    sidebarobj.current.toggle();
  };
  return (
    <div className="control-section" id="responsive-wrapper">
      <div id="reswrapper">
        {/* header-section  declaration */}
        <div>
          <ToolbarComponent id="resToolbar" clicked={toolbarCliked.bind(this)}>
            <ItemsDirective>
              <ItemDirective
                prefixIcon="e-menu tb-icons"
                tooltipText="Menu"
              ></ItemDirective>
              <ItemDirective template={folderEle}></ItemDirective>
            </ItemsDirective>
          </ToolbarComponent>
        </div>
        {/* end of header-section */}

        <SidebarComponent
          id="sideTree"
          className="sidebar-treeview"
          ref={sidebarobj}
          width={width}
          target={target}
          mediaQuery={mediaQuery}
          isOpen={true}
          dockSize="60px"
        >
          <div className="res-main-menu">
            <div className="table-content">
              <TextBoxComponent
                id="resSearch"
                placeholder="Search..."
              ></TextBoxComponent>
              <p className="main-menu-header">TABLE OF CONTENTS</p>
            </div>
            <div>
              <TreeViewComponent
                id="mainTree"
                cssClass="main-treeview"
                fields={fields}
                expandOn="Click"
                nodeSelected={onNodeSelected} // Event to handle navigation
              />
            </div>
          </div>
        </SidebarComponent>
        {/* end of sidebar element */}
        {/* .main-sidebar-content declaration */}
        <div className="main-sidebar-content" id="main-text">
          <div className="sidebar-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppLayout;
